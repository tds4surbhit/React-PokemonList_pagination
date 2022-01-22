import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Pagination from "./Pagination";
import PokemonList from "./PokemonList";

function App() {
  const [loading , setLoading] = useState(true)
  const [pokemon, setPokemon] = useState([""]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [previousPageUrl, setPreviousPageUrl] = useState("");
  useEffect(() => {
    setLoading(false)
    let cancel ;
    axios.get(currentPageUrl , {
      cancelToken : axios.CancelToken(c => cancel = c)
    }).then((res) => {
      setNextPageUrl(res.data.next);
      setPreviousPageUrl(res.data.previous);
      setPokemon(res.data.results.map((p) => p.name));
    });
    return () => cancel()
  }, [currentPageUrl]);

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl) 
  }
  
  const goToPreviousPage = () => {
    setCurrentPageUrl(previousPageUrl)
  }

  if(loading) return "Loading..."

  return (
    <React.Fragment>
      
  <PokemonList 
  pokemon={pokemon}
  />
  <Pagination
  goToNextPage = {nextPageUrl ? goToNextPage : null}
  goToPreviousPage = {previousPageUrl ? goToPreviousPage : null}
  />
  </React.Fragment>
  );
}

export default App;
