import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import MatchUpCard from "./MatchUpCard";
import "../App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function MatchUps() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [noSelected, setNoSelected] = useState(0);
  const [pokemonSelected, setPokemonSelected] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    localStorage.setItem("winner", JSON.stringify([2, 2, 2, 2]));
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=60&offset=60")
      .then(res => {
        setAllPokemons(res.data.results);
      });
  }, []);

  const changeMatchUpNo = isUp => {
    if (isUp === false) {
      setNoSelected(noSelected - 1);
    } else {
      setNoSelected(noSelected + 1);
    }
  };

  function changePokemon(pokeID, isAdd) {
    if (isAdd) {
      let tempArray = pokemonSelected;
      tempArray.push(pokeID);
      setPokemonSelected(tempArray);
    } else {
      let tempArray = pokemonSelected;
      tempArray.splice(tempArray.indexOf(pokeID), 1);
      setPokemonSelected(tempArray);
    }
  }

  function handleMatchClick() {
    if (pokemonSelected.length < 2) {
      toast.error("Too Few - You must select 2 pokemon");
    } else if (pokemonSelected.length === 2) {
      localStorage.setItem("matchPokemon", JSON.stringify(pokemonSelected));
      setRedirect(true);
    } else {
      toast.error("Too Many - You must select 2 pokemon");
    }
  }

  return (
    <div>
      {redirect && <Redirect to="/pokemon-match" />}
      <h4 className="mt-3 text-center">Select 2 pokemon to see who wins</h4>
      <div className="x-center mx-auto text-center">
        <button className="nes-btn x-center mx-auto" onClick={handleMatchClick}>
          Match Up
        </button>
      </div>

      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {allPokemons &&
          allPokemons.map((pokemon, i) => (
            <MatchUpCard
              pokemon={pokemon}
              key={i}
              id={i}
              changeNo={changeMatchUpNo}
              changePoke={changePokemon}
            />
          ))}
      </div>
    </div>
  );
}

export default MatchUps;
