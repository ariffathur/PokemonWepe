import { pokemonApiService } from "../services/pokemonApiService";
export default {
  state: {
    next: null,
    data: [],
  },
  reducers: {
    updatePokemonListType(state, payload) {
      return { ...state, ...payload };
    },
    resetPokemonListType(state) {
      state.next = null;
      state.data = [];
      return state;
    },
  },
  effects: {
    async getPokemonListType(payload) {
      const response = await pokemonApiService.fetchPokemonByType(payload.type);
      if (response.status >= 200 && response.status < 300) {
        const data = response.data;
        this.updatePokemonListType({ next: data.next, data: data.pokemon });
        return true;
      }
      if (response.status >= 400 && response.status < 600) {
        alert(`Opps something wrong, error code: ${response.status}`);
        this.updatePokemonListType;
        return false;
      }
    },
  },
};
