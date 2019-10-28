import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemon = props => {
  const [pokemon, setPokemon] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`)
      .then(res => setPokemon(res.data));
  }, []);

  console.log(pokemon);

  return (
    <>
      <div className="nes-container is-rounded mt-3">
        {pokemon && (
          <div className="row">
            <div className="col-4">
              <img
                //src={require("../assets/pokemon.jpg")}

                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                className="card-img-top"
                alt={`${pokemon.name} pokemon`}
              />
            </div>
            <div className="col-8 my-auto">
              <p>
                <b>name: {pokemon.name}</b>
              </p>
              <p>Base Experience: {pokemon.base_experience}</p>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
              {pokemon.types.map((type, i) => (
                <p key={i}>Type: {type.type.name}</p>
              ))}
            </div>
          </div>
        )}
      </div>
      <Link to={"/"} className="nes-btn mt-4">
        Home
      </Link>
    </>
  );
};

export default Pokemon;
