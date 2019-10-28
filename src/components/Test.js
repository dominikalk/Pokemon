import React from "react";
import { useState, useEffect } from "react";

function TestGet() {
  const [pokemon, setPokemon] = useState();

  let thePokemon = {};

  console.log(pokemon);

  useEffect(() => {
    thePokemon = httpGet("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  function handleInputChange(event) {
    setPokemon(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(httpGet("https://pokeapi.co/api/v2/stat/" + pokemon));
  }

  function printThing() {
    //console.log(thePokemon);
    console.log(thePokemon.affecting_moves);
  }

  function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  return (
    <>
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
      <button className="btn btn-primary ml-2" onClick={printThing}>
        Check all pokemon
      </button>
    </>
  );
}

export default TestGet;
