import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MatchPokemonCard from "./MatchPokemonCard";
import MatchPokemonCard2 from "./MathcPokemonCard2";

function PokemonMatch() {
  const [matchPokemon, setMatchPokemon] = useState([]);
  const [poke1, setPoke1] = useState();
  const [poke2, setPoke2] = useState();
  const [compare, setCompare] = useState([2, 2, 2, 2]);
  const [key1, setKey1] = useState();
  const [key2, setKey2] = useState();
  const [hasCompared, setHasCompared] = useState(false);

  useEffect(() => {
    setMatchPokemon(JSON.parse(localStorage.getItem("matchPokemon")));
  }, []);

  useEffect(() => {
    if (poke1 && poke2) {
      let tempArray = compare;
      if (poke1[0] > poke2[0]) {
        tempArray[0] = 0;
      } else if (poke1[0] < poke2[0]) {
        tempArray[0] = 1;
      } else {
        tempArray[0] = 2;
      }

      if (poke1[1] > poke2[1]) {
        tempArray[1] = 0;
      } else if (poke1[1] < poke2[1]) {
        tempArray[1] = 1;
      } else {
        tempArray[1] = 2;
      }

      if (poke1[2] > poke2[2]) {
        tempArray[2] = 0;
      } else if (poke1[2] < poke2[2]) {
        tempArray[2] = 1;
      } else {
        tempArray[2] = 2;
      }

      if (poke1[3] > poke2[3]) {
        tempArray[3] = 0;
      } else if (poke1[3] < poke2[3]) {
        tempArray[3] = 1;
      } else {
        tempArray[3] = 2;
      }

      setCompare(tempArray);
      setHasCompared(true);
      localStorage.setItem("winner", JSON.stringify(tempArray));
    }
  }, [poke1, poke2]);

  useEffect(() => {
    setKey1(Math.random());
    setKey2(Math.random());
  }, [compare]);

  function setPoke1Stat(stats) {
    setPoke1(stats);
  }

  function setPoke2Stat(stats) {
    setPoke2(stats);
  }

  return (
    <>
      <h4 className="mt-3 text-center">Pokemon match</h4>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {!hasCompared && (
          <>
            <MatchPokemonCard
              id={matchPokemon[0]}
              compareNo={0}
              setStat={setPoke1Stat}
              key={key1}
            />
            <MatchPokemonCard
              id={matchPokemon[1]}
              compareNo={1}
              setStat={setPoke2Stat}
              key={key2}
            />
          </>
        )}
        {hasCompared && (
          <>
            <MatchPokemonCard2
              id={matchPokemon[0]}
              compareNo={0}
              key={key1}
              compare={compare}
            />
            <MatchPokemonCard2
              id={matchPokemon[1]}
              compareNo={1}
              key={key2}
              compare={compare}
            />
          </>
        )}
      </div>

      <Link to={"/matchups"} className="nes-btn mt-3">
        Back
      </Link>
    </>
  );
}

export default PokemonMatch;
