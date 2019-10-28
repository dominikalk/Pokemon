import React from "react";
import { useState } from "react";
//import GetPokemon from "../GetPokemon";

function TestGet() {
  const [pokemon, setPokemon] = useState();
  const [gotPokemon, setGotPokemon] = useState("Initial");

  function handleInputChange(event) {
    setPokemon(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    testSubmit();
    //httpGet("https://pokeapi.co/api/v2/pokemon/" + pokemon + "/").toString()
  }

  function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  function testSubmit() {
    console.log(httpGet("https://pokeapi.co/api/v2/stat/" + pokemon));
  }

  return (
    <>
      <button onClick={testSubmit}>Test Button</button>
      <p>Test</p>
      <div className="form-group">
        <label>Pokemon Number:</label>
        <input
          name="pokemonNo"
          type="text"
          className="form-control"
          value={pokemon}
          onChange={handleInputChange}
        />
      </div>
      <input type="submit" className="btn btn-primary" onClick={handleSubmit} />
      <p value={gotPokemon}></p>
    </>
  );
}

export default TestGet;
