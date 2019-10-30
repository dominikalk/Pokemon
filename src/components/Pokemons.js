import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import startFavourite from "./SetFavourites";
import * as Scroll from "react-scroll";

const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokeCount, setPokeCount] = useState();
  const [offset, setOffset] = useState(0);

  let scroll = Scroll.animateScroll;

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset * 20}`)
      .then(res => {
        setAllPokemons(res.data.results);
        setPokeCount(res.data.count);
        startFavourite();
      });
  }, [offset]);

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
    <>
      <h3 className="text-center mt-3">Pokemon List</h3>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {allPokemons &&
          pokeCount &&
          offset !== null &&
          allPokemons.map((pokemon, i) => (
            <PokemonCard
              pokemon={pokemon}
              key={offset * Math.random() + Math.random()}
              id={i}
              pokeCount={pokeCount}
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
    </>
  );
};

export default Pokemons;
