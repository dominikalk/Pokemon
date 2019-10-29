import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import startFavourite from "./SetFavourites";

const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokeCount, setPokeCount] = useState();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=60&offset=60")
      .then(res => {
        setAllPokemons(res.data.results);
        setPokeCount(res.data.count);
        startFavourite();
      });
  }, []);

  return (
    <>
      <h3 className="text-center mt-3">Pokemon List</h3>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {allPokemons &&
          pokeCount &&
          allPokemons.map((pokemon, i) => (
            <PokemonCard
              pokemon={pokemon}
              key={i}
              id={i}
              pokeCount={pokeCount}
            />
          ))}
      </div>
    </>
  );
};

export default Pokemons;
