import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Spinner from "../Layout/Spinner";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      setCharacters(res.data.results);
      setInfo(res.data.info);
      setLoading(false);
    };
    fetchCharacters();
  }, [page]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="container">
      <div className="row">
        <div className="col text-center mt-4">
          <h1 className="">Get an Overview about all Characters</h1>
          <h5>
            On this Page you'll find all {info.count} Characters of Rick & Morty
            on {info.pages} pages
          </h5>
          <p>
            For more details click on the character you want to know more about
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-around">
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              setPage(page - 1);
            }}
            disabled={page === 1}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <span className="mx-4 fs-4">
            {page} ... {info.pages}
          </span>
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              setPage(page + 1);
            }}
            disabled={page === info.pages}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="row my-4">
        {characters.map((character) => (
          <Link
            to={`/character/${character.id}`}
            className="col-sm d-flex justify-content-center"
            key={character.id}
          >
            <div
              className="card text-dark m-4 border border-2 border-warning bg-transparent"
              style={{ width: 12 + "rem", height: 17 + "rem" }}
            >
              <img
                src={character.image}
                className="card-img-top p-2 img-fluid rounded"
                alt="avatar"
              />
              <div className="card-body text-center text-warning">
                <p>{character.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              setPage(page - 1);
            }}
            disabled={page === 1}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <span className="mx-4 fs-4">
            {page} ... {info.pages}
          </span>
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              setPage(page + 1);
            }}
            disabled={page === info.pages}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
