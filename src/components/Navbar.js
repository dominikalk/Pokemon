import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand mb-0 h1">Pokemon</span>
        <div className="mx-right">
          <i className="fas fa-gamepad fa-lg"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
