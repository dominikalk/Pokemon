import React, { useEffect, useState } from "react";
import "./PokemonCard.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

const PokemonCard = ({ pokemon, id, pokeCount }) => {
  const [pokemonID, setPokemonID] = useState("");
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    let url = pokemon.url.substring(0, pokemon.url.lastIndexOf("/"));
    axios.get(url).then(res => {
      setPokemonID(res.data.id);
    });
    if (localStorage.getItem("favouritesList") != null) {
      getFavourite();
    }
  }, [pokemonID]);

  function getFavourite() {
    let tempFavArray = JSON.parse(localStorage.getItem("favouritesList"));
    for (let i = 0; i < pokeCount; i++) {
      if (tempFavArray[i] === pokemonID) {
        setFavourite(true);
      }
    }
  }

  function addFavourite() {
    let tempFavArray = JSON.parse(localStorage.getItem("favouritesList"));
    tempFavArray.unshift(pokemonID);
    localStorage.setItem("favouritesList", JSON.stringify(tempFavArray));
  }

  function removeFavourite() {
    let tempFavArray = JSON.parse(localStorage.getItem("favouritesList"));
    for (let i = 0; i < tempFavArray.length; i++) {
      if (tempFavArray[i] === pokemonID) {
        tempFavArray.splice(i, 1);
        localStorage.setItem("favouritesList", JSON.stringify(tempFavArray));
      }
    }
  }

  // useEffect(() => {
  //   if (localStorage.getItem("favouritesList") != null) {
  //     let tempFavouriteList = JSON.parse(
  //       localStorage.getItem("favouritesList")
  //     );
  //     tempFavouriteList[pokemonID - 1] = favourite;
  //     localStorage.setItem("favouritesList", JSON.stringify(tempFavouriteList));
  //   }
  // }, [favourite]);

  function handleFavouriteClick() {
    if (favourite === false) {
      addFavourite();
      setFavourite(true);
    } else if (favourite === true) {
      removeFavourite();
      setFavourite(false);
    }
  }

  const favouriteClass = !favourite
    ? "nes-icon star is-transparent"
    : "nes-icon star";

  return (
    <div className="how-wide-card">
      <div className="card mt-2 text-center" style={{ width: "18rem" }}>
        {pokemonID !== "" && (
          <img
            //src={require("../assets/pokemon.jpg")}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`}
            className="card-img-top"
            alt={`${pokemon.name} pokemon`}
          />
        )}
        <div className="card-body">
          <h5 className="card-title flexing-font-card">{pokemon.name} </h5>
          <i onClick={handleFavouriteClick} className={favouriteClass}></i>
          <br />
          <Link
            to={`/pokemon/${pokemon.name}`}
            className="nes-btn flexing-font-card"
            style={{ width: "90%", margin: "5%" }}
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
