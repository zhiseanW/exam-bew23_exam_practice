import axios from "axios";

const API_URL = "http://localhost:5000";

/* 
    INSTRUCTION: 
    - Create a function to fetch pokemons from the API. 
    - API call may include query parameters for search and type.
*/
export const fetchPokemons = async (search, type) => {
  //   let params = { search, type };
  //   const query = new URLSearchParams(params);
  //   if (type !== "all") params.type = type;
  //   const res = await axios.get(`${API_URL}/pokemons?${query.toString()}`);
  const res = await axios.get(`${API_URL}/pokemons`, {
    params: { search, type },
  });
  return res.data;
};

/* INSTRUCTION: Create a function to fetch types from the API. */

export const fetchTypes = async () => {
  const res = await axios.get(`${API_URL}/types`);
  return res.data;
};
