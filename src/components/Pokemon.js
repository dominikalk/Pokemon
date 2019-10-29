import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemon = props => {
  const [pokemon, setPokemon] = useState();
  const [pokeMoves, setPokeMoves] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`)
      .then(res => setPokemon(res.data));
  }, []);

  useEffect(() => {
    if (pokemon) {
      axios
        .get(`https://pokeapi.co/api/v2/move/${pokemon.id}`)
        .then(res => setPokeMoves(res.data));
    }
  }, [pokemon]);

  console.log(pokemon);

  return (
    <>
      <div className="nes-container is-rounded mt-3">
        {pokemon && pokeMoves && (
          <div className="row">
            <div className="col-5">
              <img
                //src={require("../assets/pokemon.jpg")}

                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                className="card-img-top"
                alt={`${pokemon.name} pokemon`}
              />
            </div>
            <div className="col-7 my-auto">
              <p>
                <b>name: {pokemon.name}</b>
              </p>
              <p>Base Experience: {pokemon.base_experience}</p>
              <p>Accuracy: {pokeMoves.accuracy}</p>
              {/*<progress
                class="nes-progress is-error"
                value={pokeMoves.accuracy}
                max="100"
              ></progress>*/}
              <p>PP: {pokeMoves.pp}</p>
              <p>Priority: {pokeMoves.priority}</p>
              <p>Power: {pokeMoves.power}</p>
              {/*<progress
                class="nes-progress is-error"
                value={pokeMoves.power}
                max="100"
              ></progress>*/}
              {/*{pokemon.types.map((type, i) => (
                <p key={i}>Type: {type.type.name}</p>
              ))}*/}
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
