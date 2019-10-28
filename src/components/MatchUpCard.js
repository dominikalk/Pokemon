import React, { useEffect, useState } from "react";
import "./PokemonCard.css";
import axios from "axios";
import { Link } from "react-router-dom";

const MatchUpCard = ({ pokemon, id }) => {
  const [pokemonID, setPokemonID] = useState("");
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    axios.get(pokemon.url).then(res => {
      setPokemonID(res.data.id);
    });
  }, [pokemonID]);

  function handleSelectClick() {
    setSelected(!selected);
  }

  const selectedClass = !selected ? "nes-btn" : "nes-btn is-success";

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
          {/*<Link to={`/pokemon/${pokemon.name}`} className="nes-btn">
            Select
        </Link>*/}
          <button className={selectedClass} onClick={handleSelectClick}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchUpCard;
