import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

function Favourites() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [favourites, setFavourites] = useState([
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0
  ]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(res => {
      setAllPokemons(res.data.results);
    });
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      {allPokemons &&
        allPokemons.map((pokemon, i) => {
          if (favourites[i] === 1) {
            return <PokemonCard pokemon={pokemon} key={i} id={i} />;
          }
        })}
    </div>
  );
}

export default Favourites;
