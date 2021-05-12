import React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../images/Rick_and_Morty_logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto fs-4">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/character-list">
                Characters
              </NavLink>
              <NavLink className="nav-link" to="/episode-list">
                Episodes
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
