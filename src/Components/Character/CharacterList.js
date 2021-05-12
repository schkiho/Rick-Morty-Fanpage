import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Spinner from "../Layout/Spinner";
import Pagination from "../Layout/Pagination";

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
        <Pagination
          page={page}
          info={info}
          nextPage={getNextPage}
          prevPage={getPrevPage}
        />
      </div>
      <div className="row my-4">
        {characters.map((character) => (
          <Link
            to={`/character/${character.id}`}
            className="col-sm d-flex justify-content-center"
            key={character.id}
          >
            <div
              className="card m-4 border border-2 border-warning bg-transparent"
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

export default CharacterList;
