import React from "react";
import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import TestGet from "./components/Test";
import Navbar from "./components/Navbar";
import Pokemons from "./components/Pokemons";
import Pokemon from "./components/Pokemon";
import { Route } from "react-router-dom";

function App() {
  //useEffect(() => {pokemon.json = });

  return (
    <>
      <Navbar />
      <div className="container">
        {/* <TestGet />
        <p>Hello</p> */}
        <Route path="/" component={Pokemons} />
        <Route path="/pokemon" component={Pokemon} />
      </div>
    </>
  );
}

export default App;
