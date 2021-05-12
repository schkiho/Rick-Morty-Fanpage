import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Spinner from "../Layout/Spinner";

const EpisodeDetail = ({ match }) => {
  const [singleEpisode, setSingleEpisode] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = match.params.id;

    const fetchSingleEpisode = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://rickandmortyapi.com/api/episode/${id}`
      );

      setSingleEpisode(res.data);
      setLoading(false);
    };
    fetchSingleEpisode();
  }, [match]);

  const { id, name, air_date, episode, characters } = singleEpisode;

  return loading ? (
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
            is the <span className="text-warning">{id}</span> episode of season
            1.
          </p>
          <p className="lead">
            it was the first time on air{" "}
            <span className="text-warning">{air_date}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetail;
