import React, { useEffect, useState } from "react";
import axios from "axios";
import MatchUpCard from "./MatchUpCard";

function MatchUps() {
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then(res => {
      setAllPokemons(res.data.results);
    });
  }, []);

  return (
    <div>
      <h4 className="mt-3 text-center">To Match two Pokemon up select them</h4>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {allPokemons &&
          allPokemons.map((pokemon, i) => (
            <MatchUpCard pokemon={pokemon} key={i} id={i} />
          ))}
      </div>
    </div>
  );
}

export default MatchUps;
