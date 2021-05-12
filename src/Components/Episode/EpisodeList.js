import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Spinner from "../Layout/Spinner";
import Pagination from "../Layout/Pagination";

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://rickandmortyapi.com/api/episode?page=${page}`
      );
      setEpisodes(res.data.results);
      setInfo(res.data.info);
      setLoading(false);
    };
    fetchCharacters();
  }, [page]);

  const getPrevPage = () => {
    setPage(page - 1);
  };

  const getNextPage = () => {
    setPage(page + 1);
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="container">
      <div className="row">
        <div className="col text-center mt-4">
          <h1 className="">Get a Overview about all Episodes</h1>
          <h5>
            On this Page you'll find all {info.count} Episodes of Rick & Morty
            on {info.pages} pages
          </h5>
          <p>
            For more details click on the Episode you want to know more about
          </p>
        </div>
      </div>
      <div className="row">
        <Pagination
          page={page}
          info={info}
          nextPage={getNextPage}
          prevPage={getPrevPage}
        />
      </div>
      <div className="row my-4">
        {episodes.map((episode) => (
          <Link
            to={`/episode/${episode.id}`}
            className="col-sm d-flex justify-content-center"
            key={episode.id}
          >
            <div
              className="card m-4 border border-2 border-warning bg-transparent"
              style={{ width: 12 + "rem", height: 12 + "rem" }}
            >
              <h1 className="text-center text-warning pt-3">{episode.id}</h1>
              <div className="card-body text-center text-warning">
                <p>{episode.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="row">
        <Pagination
          page={page}
          info={info}
          nextPage={getNextPage}
          prevPage={getPrevPage}
        />
      </div>
    </div>
  );
};

export default EpisodeList;
