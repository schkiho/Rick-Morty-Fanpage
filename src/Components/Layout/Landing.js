import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Character from "../../images/Character.jpg";
import Episode from "../../images/Episode.jpg";
import LandingImg from "../../images/Landing.png";
import Spinner from "../Layout/Spinner";

const Landing = () => {
  const [infoChar, setInfoChar] = useState({});
  const [infoEpi, setInfoEpi] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const resChar = await axios.get(
        `https://rickandmortyapi.com/api/character`
      );
      const resEpi = await axios.get(`https://rickandmortyapi.com/api/episode`);
      setInfoChar(resChar.data.info);
      setInfoEpi(resEpi.data.info);
      setLoading(false);
    };
    fetchCharacters();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className="text-center text-white ">
      <div className="container landing">
        <div className="row">
          <div className="col">
            <h1 className="my-3">Welcome in the world of Rick & Morty</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <Link to="/character-list">
              <img className="img-fluid rounded" src={Character} alt="" />
              <h1 className="text-center text-warning mt-2">Character Guide</h1>
            </Link>
          </div>
          <div className="col-md-4 col-sm-12 ">
            <img
              src={LandingImg}
              alt="landing-top"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <Link to="/episode-list">
              <img className="img-fluid rounded" src={Episode} alt="Episode" />
              <h1 className="text-center text-warning mt-2">Episode Guide</h1>
            </Link>
          </div>
        </div>
        <div className="row mb-4">
          <h4>
            {" "}
            On this page i'll give you an overview of all{" "}
            <span className="text-warning">{infoChar.count}</span> characters
            and all <span className="text-warning">{infoEpi.count}</span>{" "}
            episodes.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Landing;
