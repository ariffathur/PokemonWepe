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
    resetPokemonList(state) {
      state.next = null;
      state.data = [];
      return state;
    },
  },
  effects: {
    async getPokemonList(payload) {
      const response = await pokemonApiService.fetchPokemonList(
        payload.queryString
      );
      if (response.status >= 200 && response.status < 300) {
        const data = response.data;
        this.updatePokemonList({ next: data.next, data: data.results });
        return true;
      }
      if (response.status >= 400 && response.status < 600) {
        alert(`Opps something wrong, error code: ${response.status}`);
        this.updatePokemonList;
        return false;
      }
    },
  },
};
