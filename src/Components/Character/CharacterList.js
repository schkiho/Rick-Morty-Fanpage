import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      setCharacters(res.data.results);
      setLastPage(res.data.info.pages);
      setLoading(false);
    };
    fetchCharacters();
  }, [page]);

  return loading ? (
    <h4 className="text-center">Loading...</h4>
  ) : (
    <div className="container">
      <div className="row">
        <div className="col text-center mt-4">
          <h1 className="">Get a Overview about all Characters</h1>
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
            {page} ... {lastPage}
          </span>
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              setPage(page + 1);
            }}
            disabled={page === lastPage}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="row d-flex justify-content-center my-4">
        {characters.map((character) => (
          <Link to="/" className="col-sm" key={character.id}>
            <div
              className="card text-dark m-4 border-0"
              style={{ width: 12 + "rem", height: 17 + "rem" }}
            >
              <img
                src={character.image}
                className="card-img-top"
                alt="avatar"
              />
              <div className="card-body text-center">
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
            {page} ... {lastPage}
          </span>
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              setPage(page + 1);
            }}
            disabled={page === lastPage}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
