import { pokemonApiService } from "../services/pokemonApiService";
export default {
  state: null,
  reducers: {
    updatePokemonDetail(state, payload) {
      return { ...state, ...payload };
    },
    resetPokemonDetail(state) {
      return (state = null);
    },
  },
  effects: {
    async getPokemonDetail(payload) {
      const response = await pokemonApiService.fetchPokemonDetail(payload.url);
      if (response.status === 200) {
        const data = response.data;
        this.updatePokemonDetail(data);
        return true;
      }
      if (response.status === 404) {
        alert(`Opps something wrong, error code: ${response.status}`);
        this.updatePokemonDetail;
        return false;
      }
    },
  },
};
