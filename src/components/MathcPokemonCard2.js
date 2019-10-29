import React, { useEffect, useState } from "react";
import "./PokemonCard.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MatchPokemonCard.css";
import "../App.css";

const MatchPokemonCard2 = ({ id, compareNo, compare }) => {
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    if (id != null) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemon(res.data));
      axios
        .get(`https://pokeapi.co/api/v2/move/${id}`)
        .then(res => setPokemonMoves(res.data));
    }
  }, [id]);

  const progressExp =
    compare[0] === 2
      ? "nes-progress is-warning progress mb-2"
      : compare[0] === compareNo
      ? "nes-progress is-success progress mb-2"
      : "nes-progress is-error progress mb-2";

  const progressAcc =
    compare[1] === 2
      ? "nes-progress is-warning progress mb-2"
      : compare[1] === compareNo
      ? "nes-progress is-success progress mb-2"
      : "nes-progress is-error progress mb-2";

  const progressPP =
    compare[2] === 2
      ? "nes-progress is-warning progress mb-2"
      : compare[2] === compareNo
      ? "nes-progress is-success progress mb-2"
      : "nes-progress is-error progress mb-2";

  const progressPow =
    compare[3] === 2
      ? "nes-progress is-warning progress mb-2"
      : compare[3] === compareNo
      ? "nes-progress is-success progress mb-2"
      : "nes-progress is-error progress mb-2";

  return (
    <div style={{ width: "48%", margin: "1%" }}>
      <div className="card mt-2" style={{ width: "18rem" }}>
        {pokemonMoves && pokemon && (
          <>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              className="card-img-top"
              alt={`${pokemon.name} pokemon`}
            />
            <div className="card-body">
              <h4 className="card-title flexing-font-card">
                <b>{pokemon.name}</b>
              </h4>
              <p style={{ fontSize: "1.5vw", margin: "0px" }}>
                Base Experience: {pokemon.base_experience}
              </p>
              <progress
                className={progressExp}
                value={pokemon.base_experience}
                max="240"
              ></progress>
              <p style={{ fontSize: "1.5vw", margin: "0px" }}>
                Accuracy: {pokemonMoves.accuracy}
              </p>
              <progress
                className={progressAcc}
                value={pokemonMoves.accuracy}
                max="100"
              ></progress>
              <p style={{ fontSize: "1.5vw", margin: "0px" }}>
                PP: {pokemonMoves.pp}
              </p>
              <progress
                className={progressPP}
                value={pokemonMoves.pp}
                max="35"
              ></progress>
              <p style={{ fontSize: "1.5vw", margin: "0px" }}>
                Power: {pokemonMoves.power}
              </p>
              <progress
                className={progressPow}
                value={pokemonMoves.power}
                max="100"
              ></progress>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MatchPokemonCard2;
