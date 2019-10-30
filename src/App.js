import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Pokemons from "./components/Pokemons";
import Pokemon from "./components/Pokemon";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/NotFound";
import Favourites from "./components/Favourites";
import MatchUps from "./components/MatchUps";
import PokemonMatch from "./components/PokemonMatch";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mx-auto">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon" component={Pokemons} />
            <Route path="/pokemon/:name" component={Pokemon} />
            <Route exact path="/favourites" component={Favourites} />
            <Route exact path="/matchups" component={MatchUps} />
            <Route exact path="/pokemon-match" component={PokemonMatch} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
