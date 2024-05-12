import React from "react";

function PokemonGrid(props) {
  const { pokemons, isLoading, isError } = props;
  /* INSTRUCTION: add a loading message when isLoading is true */
  if (isLoading) {
    return (
      <div>
        <h2>Loading Pokemon</h2>
      </div>
    );
  }

  /* INSTRUCTION: add an error message when isError is true */
  if (isError) {
    return (
      <div>
        <h2>Something Broke</h2>
      </div>
    );
  }

  return (
    <div className="pokemon-grid">
      {/* INSTRUCTION: if pokemons data is available, display the pokemons in a 3-columns grid. if not, display a "No pokemons found." message */}
      {pokemons.length > 0 ? (
        pokemons.map((p) => (
          <div key={p.name}>
            <div
              //  key={p._id}
              style={{
                backgroundColor: "lightgray",
                padding: "10px",
                borderRadius: "3px",
              }}
            >
              <div>
                <h2>{p.name}</h2>
              </div>
              {/* <br /> */}
              <div>
                <p>Type: {p.type}</p>
              </div>
              {/* <br /> */}
              <div>
                <p>Level: {p.level}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h1>No pokemons found.</h1>
        </div>
      )}
    </div>
  );
}

export default PokemonGrid;
