import React from "react";
import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import TestGet from "./components/Test";
import Navbar from "./components/Navbar";

function App() {
  //useEffect(() => {pokemon.json = });

  return (
    <>
      <Navbar />
      <div className="container">
        <TestGet />
        <p>Hello</p>
      </div>
    </>
  );
}

export default App;
