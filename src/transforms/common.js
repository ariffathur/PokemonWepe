export function getPokeIdFromURL(url) {
  const urlSplit = url.split("https://pokeapi.co/api/v2/pokemon/");
  return urlSplit[1].replace("/", "");
}
