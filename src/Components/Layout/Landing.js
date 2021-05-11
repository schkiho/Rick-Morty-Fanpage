import React from "react";
import { Link } from "react-router-dom";
import { Wave } from "react-animated-text";

import Character from "../../images/Character.jpg";
import Episode from "../../images/Episode.jpg";

const Landing = () => {
  return (
    <div className="text-center mt-2 text-white">
      <div className="container ">
        <div className="row d-flex justify-content-center fs-1">
          <Wave
            text="Welcome to my Rick & Morty Fanpage"
            effect="stretch"
            effectChange={2}
          />
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Link to="/character-list">
              <img className="img-fluid rounded" src={Character} alt="" />
              <h1 className="text-center mt-2">Character Guide</h1>
            </Link>
          </div>
          <div className="col-md-6 col-sm-12">
            <Link to="/episode-list">
              <img className="img-fluid rounded" src={Episode} alt="Episode" />
              <h1 className="text-center mt-2">Episode Guide</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
