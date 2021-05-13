import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Spinner from "../Layout/Spinner";

const CharacterDetail = ({ match }) => {
  const [character, setCharacter] = useState({
    id: 0,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: "",
    location: "",
    image: "",
    episode: [],
  });
  const [loading, setLoading] = useState(false);
  const [favorits, setFavorits] = useState(() => {
    const localData = localStorage.getItem("favorits");

    return localData ? JSON.parse(localData) : {};
  });

  useEffect(() => {
    const id = match.params.id;

    const fetchSingleCharacter = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );

      setCharacter({
        id: res.data.id,
        name: res.data.name,
        status: res.data.status,
        species: res.data.species,
        type: res.data.type,
        gender: res.data.gender,
        origin: res.data.origin.name,
        location: res.data.location.name,
        image: res.data.image,
        episode: res.data.episode,
        favorite: false,
      });

      setLoading(false);
    };
    fetchSingleCharacter();
  }, [match]);

  useEffect(() => {
    localStorage.setItem("favorits", JSON.stringify(favorits));
  }, [favorits]);

  const onClick = () =>
    setFavorits({
      charId: character.id,
      isFavorite: !favorits.isFavorite,
    });

  const {
    id,
    name,
    status,
    species,
    type,
    gender,
    image,
    origin,
    location,
    episode,
  } = character;

  return loading && character === {} ? (
    <Spinner />
  ) : (
    <div className="container my-4 px-4">
      <Link
        to="/character-list"
        className="btn btn-lg btn-outline-warning mb-2"
      >
        Back
      </Link>
      <h1 className="text-center">{name}</h1>
      <div className="row my-4">
        <div className="col-md-6 col-sm-12">
          <img className="img-fluid rounded" src={image} alt="avatar" />
        </div>
        <div className="col-md-6 col-sm-12">
          <table className="mt-4 fs-4" style={{ width: 100 + "%" }}>
            <tbody>
              <tr>
                <td>Status:</td>
                <td>{status}</td>
              </tr>
              <tr>
                <td>Species:</td>
                <td>{species}</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>
                  {type === "" ? "This character has no subspecies" : species}
                </td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>{gender}</td>
              </tr>
              <tr>
                <td>Origin:</td>
                <td>{origin}</td>
              </tr>
              <tr>
                <td>Location:</td>
                <td>{location}</td>
              </tr>
              <tr>
                <td>Favorit:</td>
                <td>
                  {favorits.charId === id && favorits.isFavorite === true ? (
                    <i className="fas fa-heart text-danger" />
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col text-center mt-4" key={id}>
          <button
            className="btn btn-lg btn-outline-warning mb-4"
            onClick={onClick}
          >
            Mark this character as favorite
          </button>
          <h4 className="mb-4">
            Here is a list of all episodes{" "}
            <span className="text-warning">{name}</span> acts in
          </h4>

          {episode.map((item) => (
            <Link
              to={`/episode/${item.slice(40)}`}
              className="btn btn-outline-warning m-1"
              key={item.slice(40)}
            >
              <span>{item.slice(40)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
