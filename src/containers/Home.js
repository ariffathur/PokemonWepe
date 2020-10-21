import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useCallback,
} from "react";
import { FlatList, RefreshControl, Text } from "react-native";
import {
  Container,
  SearchIcon,
  PokemonCard,
  LoadingIndicator,
} from "../components";
import { connect } from "react-redux";

const Home = (props) => {
  const { navigation, getPokemonList, pokemonListData, loading } = props;
  const [pokemons, setPokemons] = useState({ next: null, data: [] });
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getPokemonList({ queryString: "?limit=20" });
  }, []);

  useEffect(() => {
    if (pokemonListData !== null) {
      setPokemons((prevState) => {
        return {
          ...prevState,
          next: pokemonListData?.next,
          data: prevState.data.concat(pokemonListData?.data),
        };
      });
    }
  }, [pokemonListData]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    resetState();
    getPokemonList({ queryString: "?limit=20" });
    setRefreshing(false);
  }, [refreshing]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SearchIcon
          onPress={() => navigation.navigate("SearchScreen")}
          style={{ paddingRight: 16 }}
        />
      ),
    });
  }, [navigation]);

  async function handleLoadMore() {
    if (loading) {
      return null;
    }
    if (pokemons?.next) {
      //split the url to get only query string
      let queryString = pokemons.next.split("?");

      await getPokemonList({
        queryString: `?${queryString[1]}`,
      });
    } else {
      return null;
    }
  }

  function resetState() {
    setPokemons((prevState) => {
      return {
        ...prevState,
        next: "",
        data: [],
      };
    });
  }

  return (
    <Container backgroundBlue>
      <FlatList
        contentContainerStyle={{ padding: 16 }}
        numColumns={2}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#3A99D8"]}
          />
        }
        data={pokemons?.data}
        renderItem={({ index, item }) => (
          <PokemonCard index={index} item={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index}
        ListEmptyComponent={loading ? null : <Text>Data Kosong</Text>}
        ListFooterComponent={loading ? <LoadingIndicator /> : null}
        onEndReachedThreshold={0.3}
        onEndReached={handleLoadMore}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

const mapState = (state) => ({
  pokemonListData: state.pokemonList,
  loading: state.loading.effects.pokemonList.getPokemonList,
});

const mapDispatch = ({ pokemonList: { getPokemonList } }) => ({
  getPokemonList: (payload) => getPokemonList(payload),
});

export default connect(mapState, mapDispatch)(Home);
