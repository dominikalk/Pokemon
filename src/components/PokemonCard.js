import React, { useEffect, useState } from "react";
import "./PokemonCard.css";
import axios from "axios";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon, id }) => {
  const [img, setImg] = useState("");
  const [pokemonID, setPokemonID] = useState("");
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    axios.get(pokemon.url).then(res => setPokemonID(res.data.id));
  }, []);

  function handleFavouriteClick() {
    console.log();
    if (favourite === false) {
      setFavourite(true);
    } else if (favourite === true) {
      setFavourite(false);
    } else {
      console.log("Favourite Error");
      debugger;
    }
  }

  const favouriteClass = !favourite
    ? "nes-icon star is-transparent"
    : "nes-icon star";

  return (
    <div style={{ width: "31%", margin: "1%" }}>
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
          <h5 className="card-title">{pokemon.name} </h5>
          <i onClick={handleFavouriteClick} className={favouriteClass}></i>
          <Link to={`/pokemon/${pokemon.name}`} className="nes-btn">
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
