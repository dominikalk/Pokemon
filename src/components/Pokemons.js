import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonUrl, setPokemonUrl] = useState("");
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then(res => setAllPokemons(res.data.results));
  }, []);
  console.log(pokemonUrl);
  return (
    <>
      {allPokemons &&
        allPokemons.map((pokemon, i) => (
          <div key={i} onClick={() => setPokemonUrl(pokemon.url)}>
            <div className="card mt-2" style={{ width: "18rem" }}>
              <img
                src={require("../assets/pokemon.jpg")}
                className="card-img-top"
                alt={`${pokemon.name} pokemon`}
              />
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <a
                  href={`/pokemon/${pokemon.name}`}
                  className="btn btn-secondary"
                >
                  More Details
                </a>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Pokemons;
