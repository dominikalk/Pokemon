import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";

function Favourites() {
  const [favPokes, setFavPokes] = useState([]); // pokemon object

  const [favourites, setFavourites] = useState([]); // pokemon id
  const [hasLength, setHasLength] = useState(false);

  const [pokeCount, setPokeCount] = useState();

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(res => {
      setPokeCount(res.data.count);
    });
    setFavourites(JSON.parse(localStorage.getItem("favouritesList")));
  }, []);

  useEffect(() => {
    if (favourites.length !== 0) {
      setHasLength(true);
    }
    let tempFavPokesArray = [];
    for (let i = 0; i < favourites.length; i++) {
      axios
        .get(
          `https://pokeapi.co/api/v2/pokemon/?limit=1&offset=${favourites[i] -
            1}`
        )
        .then(res => {
          tempFavPokesArray.push(res.data.results[0]);
          if (tempFavPokesArray.length === favourites.length) {
            setFavPokes(tempFavPokesArray);
          }
        });
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
        {favPokes &&
          pokeCount &&
          favPokes.map((pokemon, i) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                key={i}
                id={favourites[i]}
                pokeCount={pokeCount}
              />
            );
          })}
      </div>
    </>
  );
}

export default Favourites;
