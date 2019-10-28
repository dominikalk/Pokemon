import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Pokemon</span>
        </Link>

        <div className="mx-right">
          <Link to="/">
            <i className="nes-pokeball"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
