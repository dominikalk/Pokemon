import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";

function Favourites() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [hasLength, setHasLength] = useState(false);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(res => {
      setAllPokemons(res.data.results);
    });
    setFavourites(JSON.parse(localStorage.getItem("favouritesList")));
  }, []);

  useEffect(() => {
    if (favourites) {
      for (let i = 0; i < 20; i++) {
        if (favourites[i] === true) {
          setHasLength(true);
        }
      }
    }
  }, [favourites]);

  return (
    <>
      {!hasLength ? (
        <div disabled={hasLength}>
          <h3 className="mt-3">You have no favourite Pokemon</h3>
          <Link to={"/"} className="nes-btn mt-3">
            Home
          </Link>
        </div>
      ) : null}

      {hasLength ? (
        <div>
          <h4 className="text-center mt-3">Favourite Pokemon</h4>
        </div>
      ) : null}

      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {allPokemons &&
          favourites &&
          allPokemons.map((pokemon, i) => {
            if (favourites[i] === true) {
              return <PokemonCard pokemon={pokemon} key={i} id={i} />;
            }
          })}
      </div>
    </>
  );
}

export default Favourites;
