import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      {/*Pokemon Card*/}
      <div style={{ width: "31%", margin: "1%" }}>
        <div className="card mt-2 text-center" style={{ width: "18rem" }}>
          <img
            src={require("../assets/pokemon.jpg")}
            className="card-img-top"
            alt="Pokemon List"
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "1.5vw" }}>
              <b>Pokemon List</b>
            </h5>
            <Link
              to="/pokemon"
              className="nes-btn"
              style={{ width: "90%", margin: "5%", fontSize: "1.2vw" }}
            >
              Go To Pokemon
            </Link>
          </div>
        </div>
      </div>

      {/*Favourite Card*/}
      <div style={{ width: "31%", margin: "1%" }}>
        <div className="card mt-2 text-center" style={{ width: "18rem" }}>
          <img
            src={require("../assets/pokeball.jpg")}
            className="card-img-top"
            alt="Pokemon List"
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "1.5vw" }}>
              <b>Favourite Pokemon</b>
            </h5>
            <Link
              to="/favourites"
              className="nes-btn small-font"
              style={{ width: "90%", margin: "5%" }}
            >
              <div style={{ fontSize: "1.2vw" }}>Go To favourites</div>
            </Link>
          </div>
        </div>
      </div>

      {/*Match Up Card*/}
      <div style={{ width: "31%", margin: "1%" }}>
        <div className="card mt-2 text-center" style={{ width: "18rem" }}>
          <img
            src={require("../assets/matchup.jpg")}
            className="card-img-top"
            alt="Pokemon List"
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "1.5vw" }}>
              <b>Match Up Pokemon</b>
            </h5>
            <Link
              to="/matchups"
              className="nes-btn"
              style={{ width: "90%", margin: "5%", fontSize: "1.2vw" }}
            >
              Go To Match Ups
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
