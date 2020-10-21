import axios from "axios";

const pokedexApiClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

function fetchPokemonList(params) {
  return pokedexApiClient
    .get(`pokemon/${params}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
}

function fetchPokemonDetail(url) {
  return pokedexApiClient
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
}

function fetchPokemonByType(type) {
  return pokedexApiClient
    .get(`type/${type}/`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
}

export const pokemonApiService = {
  fetchPokemonList,
  fetchPokemonDetail,
  fetchPokemonByType,
};
