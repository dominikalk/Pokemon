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

  useEffect(() => {
    if (localStorage.getItem("match1") === null) {
      localStorage.setItem("match1", null);
      localStorage.setItem("match2", null);
    }
    if (selected === true) {
      if (localStorage.getItem("match1") === "null") {
        localStorage.setItem("match1", pokemonID);
      } else if (localStorage.getItem("match2") === "null") {
        localStorage.setItem("match2", pokemonID);
      }
    } else {
      if (localStorage.getItem("match1") === pokemonID.toString()) {
        localStorage.setItem("match1", null);
      } else if (localStorage.getItem("match2") === pokemonID.toString()) {
        localStorage.setItem("match2", null);
      }
    }
  }, [selected]);

  function handleSelectClick() {
    setSelected(!selected);
  }

  const selectedClass = !selected ? "nes-btn" : "nes-btn is-success";

  return (
    <div style={{ width: "31%", margin: "1%" }}>
      <div className="card mt-2 text-center" style={{ width: "18rem" }}>
        {pokemonID !== "" && (
          <img
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