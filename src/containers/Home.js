import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import {
  Container,
  FilterIcon,
  PokemonCard,
  LoadingIndicator,
  EmptyState,
} from "../components";
import { pokemonType } from "../config/types";
import { connect } from "react-redux";

const Home = (props) => {
  const {
    navigation,
    getPokemonList,
    resetPokemonList,
    getPokemonListType,
    resetPokemonListType,
    pokemonListData,
    pokemonListTypeData,
    loading,
    loadingType,
  } = props;

  const [pokemons, setPokemons] = useState({ next: null, data: [] });
  const [refreshing, setRefreshing] = useState(false);
  const [selectedPokemonType, setSelectedPokemonType] = useState("all");
  const [modalVisible, setModalVisible] = useState(false);

  //listen selected pokemon state to retrieve data accordingly
  useEffect(() => {
    if (selectedPokemonType === "all") {
      resetAllData();
      getPokemonList({ queryString: "?limit=20" });
    } else {
      resetAllData();
      getPokemonListType({ type: selectedPokemonType });
    }
  }, [selectedPokemonType]);

  //listen data changes from pokemonList model
  useEffect(() => {
    if (pokemonListData?.data) {
      setPokemons((prevState) => {
        return {
          ...prevState,
          next: pokemonListData?.next,
          data: prevState.data.concat(pokemonListData?.data),
        };
      });
    }
  }, [pokemonListData]);

  //listen data changes from pokemonListType model
  useEffect(() => {
    if (pokemonListTypeData?.data) {
      let data = pokemonListTypeData?.data.map((item) => ({
        name: item.pokemon.name,
        url: item.pokemon.url,
      }));
      setPokemons((prevState) => {
        return {
          ...prevState,
          next: undefined,
          data: data,
        };
      });
    }
  }, [pokemonListTypeData]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    resetAllData();
    getPokemonList({ queryString: "?limit=20" });
    setSelectedPokemonType("all");
    setRefreshing(false);
  }, [refreshing]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FilterIcon
          onPress={() => setModalVisible(true)}
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
      let queryString = pokemons?.next?.split("?");

      await getPokemonList({
        queryString: `?${queryString[1]}`,
      });
    } else {
      return null;
    }
  }

  async function handleChooseType(item) {
    await setModalVisible(false);
    await setSelectedPokemonType(item);
  }

  function resetAllData() {
    resetState();
    resetPokemonList();
    resetPokemonListType();
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
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
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
        ListEmptyComponent={loading || loadingType ? null : <EmptyState />}
        ListFooterComponent={
          loading || loadingType ? <LoadingIndicator /> : null
        }
        onEndReachedThreshold={0.3}
        onEndReached={handleLoadMore}
        showsVerticalScrollIndicator={false}
      />
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View
          style={{
            backgroundColor: "#fff",
            padding: 16,
            borderRadius: 8,
            position: "absolute",
            bottom: 0,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Filter by pokemon type
          </Text>
          <View
            style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 16 }}
          >
            {pokemonType.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleChooseType(item)}
                style={{
                  borderRadius: 4,
                  borderWidth: 2,
                  borderColor:
                    selectedPokemonType === item ? "#3A99D8" : "#5D6A70",
                  paddingHorizontal: 6,
                  marginBottom: 6,
                  marginRight: 6,
                }}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </Container>
  );
};

const mapState = (state) => ({
  pokemonListData: state.pokemonList,
  pokemonListTypeData: state.pokemonListType,
  loading: state.loading.effects.pokemonList.getPokemonList,
  loadingType: state.loading.effects.pokemonListType.getPokemonListType,
});

const mapDispatch = ({
  pokemonList: { getPokemonList, resetPokemonList },
  pokemonListType: { getPokemonListType, resetPokemonListType },
}) => ({
  getPokemonList: (payload) => getPokemonList(payload),
  resetPokemonList: () => resetPokemonList(),
  getPokemonListType: (payload) => getPokemonListType(payload),
  resetPokemonListType: () => resetPokemonListType(),
});

export default connect(mapState, mapDispatch)(Home);
