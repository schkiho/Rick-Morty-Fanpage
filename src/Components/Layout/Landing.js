import React from "react";
import { Link } from "react-router-dom";

import Character from "../../images/Character.jpg";
import Episode from "../../images/Episode.jpg";

const Landing = () => {
  return (
    <div className="text-center mt-2 text-white">
      <div className="d-flex justify-content-center">
        <div id="warped" className="loading">
          <span class="w0">W</span>
          <span class="w1">e</span>
          <span class="w2">l</span>
          <span class="w3">c</span>
          <span class="w4">o</span>
          <span class="w5">m</span>
          <span class="w6">e</span>
          <span class="w7"> </span>
          <span class="w8">t</span>
          <span class="w9">o</span>
          <span class="w10"> </span>
          <span class="w11">m</span>
          <span class="w12">y</span>
          <span class="w13"> </span>
          <span class="w14">R</span>
          <span class="w15">i</span>
          <span class="w16">c</span>
          <span class="w17">k</span>
          <span class="w18"> </span>
          <span class="w19">&</span>
          <span class="w20"> </span>
          <span class="w21">M</span>
          <span class="w22">o</span>
          <span class="w23">r</span>
          <span class="w24">t</span>
          <span class="w25">y</span>
          <span class="w26"> </span>
          <span class="w27">F</span>
          <span class="w28">a</span>
          <span class="w29">n</span>
          <span class="w30">p</span>
          <span class="w31">a</span>
          <span class="w32">g</span>
          <span class="w33">e</span>
        </div>
      </div>

      <div className="container ">
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
