import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Pokemons from "./components/Pokemons";
import Pokemon from "./components/Pokemon";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Pokemons} />
          <Route path="/pokemon/:name" component={Pokemon} />
        </Switch>
      </div>
    </>
  );
}

export default App;
