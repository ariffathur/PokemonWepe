import { pokemonApiService } from "../services/pokemonApiService";
export default {
  state: {
    next: null,
    data: [],
  },
  reducers: {
    updatePokemonList(state, payload) {
      return { ...state, ...payload };
    },
  },
  effects: {
    async getPokemonList(payload) {
      const response = await pokemonApiService.fetchPokemonList(
        payload.queryString
      );
      if (response.status === 200) {
        const data = response.data;
        this.updatePokemonList({ next: data.next, data: data.results });
        return true;
      }
      if (response.status === 404) {
        alert(`Opps something wrong, error code: ${response.status}`);
        this.updatePokemonList;
        return false;
      }
    },
  },
};
