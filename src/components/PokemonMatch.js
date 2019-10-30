import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MatchPokemonCard from "./MatchPokemonCard";

function PokemonMatch() {
  const [matchPokemon, setMatchPokemon] = useState();
  const [poke1, setPoke1] = useState();
  const [poke2, setPoke2] = useState();
  const [compare, setCompare] = useState();
  const [hasCompared, setHasCompared] = useState(false);

  useEffect(() => {
    setMatchPokemon(JSON.parse(localStorage.getItem("matchPokemon")));
  }, []);

  useEffect(() => {
    if (matchPokemon) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${matchPokemon[0]}`)
        .then(res => {
          axios
            .get(`https://pokeapi.co/api/v2/move/${matchPokemon[0]}`)
            .then(otherRes => {
              setPoke1([
                res.data.base_experience,
                otherRes.data.accuracy,
                otherRes.data.pp,
                otherRes.data.power
              ]);
            });
        });
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${matchPokemon[1]}`)
        .then(res => {
          axios
            .get(`https://pokeapi.co/api/v2/move/${matchPokemon[1]}`)
            .then(otherRes => {
              setPoke2([
                res.data.base_experience,
                otherRes.data.accuracy,
                otherRes.data.pp,
                otherRes.data.power
              ]);
            });
        });
    }
  }, [matchPokemon]);

  useEffect(() => {
    if (poke1 && poke2) {
      let tempArray = [2, 2, 2, 2];
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

      localStorage.setItem("winner", JSON.stringify(tempArray));
    }
  }, [poke1, poke2]);

  useEffect(() => {
    if (compare) {
      setHasCompared(true);
    }
  }, [compare]);

  return (
    <>
      <h4 className="mt-3 text-center">Pokemon match</h4>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {hasCompared && (
          <>
            <MatchPokemonCard
              id={matchPokemon[0]}
              compareNo={0}
              compare={compare}
            />
            <MatchPokemonCard
              id={matchPokemon[1]}
              compareNo={1}
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
