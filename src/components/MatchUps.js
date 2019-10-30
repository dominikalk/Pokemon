import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import MatchUpCard from "./MatchUpCard";
import "../App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Scroll from "react-scroll";

toast.configure();

function MatchUps() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [noSelected, setNoSelected] = useState(0);
  const [pokemonSelected, setPokemonSelected] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [offset, setOffset] = useState(0);

  let scroll = Scroll.animateScroll;

  useEffect(() => {
    localStorage.setItem("winner", JSON.stringify([2, 2, 2, 2]));
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset * 20}`)
      .then(res => {
        setAllPokemons(res.data.results);
      });
  }, [offset]);

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

  const nextPageClick = () => {
    scroll.scrollToTop();
    setOffset(offset + 1);
  };

  const prevPageClick = () => {
    if (offset > 0) {
      scroll.scrollToTop();
      setOffset(offset - 1);
    }
  };

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
          offset !== null &&
          allPokemons.map((pokemon, i) => (
            <MatchUpCard
              selectedPokes={pokemonSelected}
              pokemon={pokemon}
              key={offset * Math.random() + Math.random()}
              id={i}
              changeNo={changeMatchUpNo}
              changePoke={changePokemon}
            />
          ))}
      </div>
      <div className="text-center">
        <button className="nes-btn mr-2" onClick={prevPageClick}>
          Prev
        </button>
        <button className="nes-btn ml-2" onClick={nextPageClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default MatchUps;
