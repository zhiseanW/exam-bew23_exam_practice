import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
/* INSTRUCTION: Import the fetchPokemons and fetchTypes functions from the utils/api file */
import { fetchPokemons, fetchTypes } from "./utils/api";

/* INSTRUCTION: Import the Filters, and PokemonGrid components */
import Filters from "./components/Filters";
import PokemonGrid from "./components/PokemonGrid";

function App() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  /* 
        INSTRUCTION: 
        - Use the useQuery hook to fetch pokemons. 
        - May pass the search and type as query keys so that the data will be refetched when these values change. 
    */
  const {
    data: pokemons = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pokemons", search, type],
    queryFn: () => fetchPokemons(search, type),
  });

  /* INSTRUCTION: Use the useQuery hook to fetch types */
  const { data: types = [] } = useQuery({
    queryKey: ["types"],
    queryFn: () => fetchTypes(),
  });

  /* INSTRUCTION: Create functions to handle search change */
  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  };

  const handleTypeChange = (newType) => {
    /* INSTRUCTION: Update the type state */
    setType(newType);
  };

  return (
    <div className="app">
      <h1>Pokedex</h1>
      <Filters
        /* INSTRUCTION: 
                    - Pass the search and type states as props to the Filters component
                    - Pass the types data as props to the Filters component
                */
        search={search}
        type={type}
        types={types}
        onSearchChange={handleSearchChange}
        onTypeChange={handleTypeChange}
        /* 
                    INSTRUCTION:
                    - Pass the handleSearchChange functions as props to the Filters component
                */
      />
      <PokemonGrid
        /* 
                INSTRUCTION:
                    - Pass the pokemons, isLoading, and isError states as props to the PokemonGrid component
                */
        pokemons={pokemons}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}

export default App;
