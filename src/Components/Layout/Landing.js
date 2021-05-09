import React from "react";
import { Link } from "react-router-dom";

import Character from "../../images/Character.jpg";
import Episode from "../../images/Episode.jpg";

const Landing = () => {
  return (
    <div className="text-center mt-4 text-white">
      <h1>Welcome to my Rick & Morty Fanpage</h1>
      <div className="container">
        <div className="row my-4">
          <div className="col-md-6 col-sm-12">
            <Link to="/">
              <img className="img-fluid rounded" src={Character} alt="" />
              <h1 className="text-center">Character Guide</h1>
            </Link>
          </div>
          <div className="col-md-6 col-sm-12">
            <Link to="/">
              <img className="img-fluid rounded" src={Episode} alt="Episode" />
              <h1 className="text-center">Episode Guide</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
