import React from "react";
import { useState } from "react";
import GetPokemon from "../GetPokemon";

function TestGet() {
  const [pokemon, setPokemon] = useState();
  const [gotPokemon, setGotPokemon] = useState("Initial");

  function handleInputChange(event) {
    setPokemon(event.target.value);
  }

  function handleSubmit() {
    setGotPokemon(
      GetPokemon.httpGet("https://pokeapi.co/api/v2/pokemon/" + pokemon + "/")
    );
  }

  return (
    <>
      <p>Test</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Pokemon Number:</label>
          <input
            type="text"
            className="form-control"
            value={pokemon}
            onChange={handleInputChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
      <p value={gotPokemon}></p>
    </>
  );
}

export default TestGet;
