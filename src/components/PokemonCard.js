import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon, id }) => {
  const [img, setImg] = useState("");
  const [pokemonID, setPokemonID] = useState("");
  useEffect(() => {
    axios.get(pokemon.url).then(res => setPokemonID(res.data.id));
  }, []);
  return (
    <div style={{ width: "31%", margin: "1%" }}>
      <div className="card mt-2" style={{ width: "18rem" }}>
        {pokemonID !== "" && (
          <img
            //src={require("../assets/pokemon.jpg")}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`}
            className="card-img-top"
            alt={`${pokemon.name} pokemon`}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{pokemon.name}</h5>
          <Link to={`/pokemon/${pokemon.name}`} className="nes-btn">
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
