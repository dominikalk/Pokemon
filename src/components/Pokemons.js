import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import startFavourite from "./SetFavourites";

const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(res => {
      setAllPokemons(res.data.results);
      startFavourite();
    });
  }, []);

  return (
    <>
      <h3 className="text-center mt-3">Pokemon List</h3>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {allPokemons &&
          allPokemons.map((pokemon, i) => (
            <PokemonCard pokemon={pokemon} key={i} id={i} />
          ))}
      </div>
    </>
  );
};

export default Pokemons;
