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

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon" component={Pokemons} />
          <Route path="/pokemon/:name" component={Pokemon} />
          <Route exact path="/favourites" component={Favourites} />
          <Route exact path="/matchups" component={MatchUps} />

          <Route component={PageNotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
