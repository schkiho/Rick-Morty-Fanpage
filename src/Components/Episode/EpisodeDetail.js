import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Spinner from "../Layout/Spinner";

const EpisodeDetail = ({ match }) => {
  const [singleEpisode, setSingleEpisode] = useState({
    id: "",
    name: "",
    air_date: "",
    episode: "",
    characters: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = match.params.id;

    const fetchSingleEpisode = async () => {
      setLoading(true);
      const resEpisode = await axios.get(
        `https://rickandmortyapi.com/api/episode/${id}`
      );

      const resCharacter = await axios.get(
        `https://rickandmortyapi.com/api/character/${resEpisode.data.characters.map(
          (item) => parseInt(item.slice(42))
        )}`
      );

      setSingleEpisode({
        id: resEpisode.data.id,
        name: resEpisode.data.name,
        air_date: resEpisode.data.air_date,
        episode: resEpisode.data.episode,
        characters: resCharacter.data,
      });
      setLoading(false);
    };
    fetchSingleEpisode();
  }, [match]);

  const { id, name, air_date, episode, characters } = singleEpisode;

  return loading && singleEpisode === {} ? (
    <Spinner />
  ) : (
    <div className="container my-4 px-4">
      <Link to="/episode-list" className="btn btn-lg btn-outline-warning mb-2">
        Back
      </Link>
      <h1 className="text-center">{episode}</h1>
      <div className="row my-4 ">
        <div className="col text-center">
          <h3 className="text-warning">{name}</h3>
          <p className="lead">
            is the <span className="text-warning fw-bold">{id}</span> episode of
            season{" "}
            <span className="text-warning fw-bold">{episode.slice(2, 3)}</span>.
          </p>
          <p className="lead">
            it was the first time on air{" "}
            <span className="text-warning fw-bold">{air_date}</span>{" "}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center mt-4">
          <h4 className="mb-4">
            Here is a list of all characters{" "}
            <span className="text-warning fw-bold">{name}</span> acts in this
            episode
          </h4>
        </div>
      </div>
      <div className="row">
        {characters.map((item) => (
          <Link
            to={`/character/${item.id}`}
            key={item.id}
            className="col-sm d-flex justify-content-center"
          >
            <div
              className="card m-4 border border-2 border-warning bg-transparent"
              style={{ width: 10 + "rem", height: 14 + "rem" }}
            >
              <img
                src={item.image}
                className="card-img-top p-2 img-fluid rounded"
                alt="avatar"
              />
              <div className="card-body text-center text-warning">
                <p>{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EpisodeDetail;
