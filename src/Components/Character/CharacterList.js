import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      setCharacters(res.data.results);
      setLoading(false);
    };
    fetchCharacters();
  }, [page]);

  return loading ? (
    <h4>Loading...</h4>
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
      <div className="row justify-content-center">
        {characters.map((character) => (
          <Link to="/" className="col-sm">
            <div
              className="card text-dark m-2 border-0"
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
    </div>
  );
};

export default CharacterList;
