import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Pokemon.css";

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

  return (
    <>
      <div className="nes-container is-rounded mt-3">
        {pokemon && pokeMoves && (
          <div className="row">
            <div className="col-5">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                className="card-img-top"
                alt={`${pokemon.name} pokemon`}
              />
            </div>
            <div className="col-7 my-auto">
              <p style={{ fontSize: "2.2vw" }}>
                <b>name: {pokemon.name}</b>
              </p>
              <p style={{ fontSize: "1.8vw" }}>
                Base Experience: {pokemon.base_experience}
              </p>
              <p style={{ fontSize: "1.8vw" }}>
                Accuracy: {pokeMoves.accuracy}
              </p>
              <p style={{ fontSize: "1.8vw" }}>PP: {pokeMoves.pp}</p>
              <p style={{ fontSize: "1.8vw" }}>Power: {pokeMoves.power}</p>
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
