export function getPokeIdFromURL(url) {
  let urlSplit = url.split("https://pokeapi.co/api/v2/pokemon/");
  let pokemonId = urlSplit[1].replace("/", "");
  return pokemonId;
}
