import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemon = props => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`)
      .then(res => setPokemon(res.data));
  }, []);
  console.log(pokemon);
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img
            //src={require("../assets/pokemon.jpg")}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${1}.png`}
            className="card-img-top"
            alt={`${pokemon.name} pokemon`}
          />
        </div>
        <div className="col-8 my-auto">
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
