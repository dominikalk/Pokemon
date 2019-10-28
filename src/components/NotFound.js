import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="mt-3">
      <h2>Page Not Found</h2>
      <p>
        <br />
        <Link to="/" className="nes-btn">
          Back To Home
        </Link>
      </p>
    </div>
  );
}

export default PageNotFound;
