import React, { useEffect } from "react";
import { Text, View, Image, ScrollView, Dimensions } from "react-native";
import { connect } from "react-redux";
import { Container } from "../components";
import { getPokeIdFromURL } from "../transforms/common";

const Detail = (props) => {
  const {
    route,
    pokemonDetailData,
    getPokemonDetail,
    resetPokemonDetail,
    loading,
  } = props;
  const imageDimens = Dimensions.get("window").width - 30;

  useEffect(() => {
    getPokemonDetail({ url: route.params.pokemonDetailURL });
  }, []);

  useEffect(() => {
    return () => {
      resetPokemonDetail();
    };
  }, []);

  return (
    <Container isLoading={loading}>
      <ScrollView style={{ padding: 16 }}>
        <Image
          resizeMode={"contain"}
          style={{
            height: imageDimens,
            width: imageDimens,
          }}
          source={{
            uri: `https://pokeres.bastionbot.org/images/pokemon/${getPokeIdFromURL(
              route.params.pokemonDetailURL
            )}.png`,
          }}
        />
        <Details name="Name" data={pokemonDetailData?.name} />
        <Details name="Weight" data={`${pokemonDetailData?.weight} Kg`} />
        <Details
          name="Types"
          data={pokemonDetailData?.types
            .map((item) => item.type.name)
            .join(", ")}
        />
        <Details
          name="Abilities"
          data={pokemonDetailData?.abilities
            .map((item) => item.ability.name)
            .join(", ")}
        />
      </ScrollView>
    </Container>
  );
};

const Details = (props) => {
  return (
    <View style={{ marginTop: 16, alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{props.name}</Text>
      <Text style={{ fontSize: 16 }}>{props.data}</Text>
    </View>
  );
};

const mapState = (state) => ({
  loading: state.loading.effects.pokemonDetail.getPokemonDetail,
  pokemonDetailData: state.pokemonDetail,
});

const mapDispatch = ({
  pokemonDetail: { getPokemonDetail, resetPokemonDetail },
}) => ({
  getPokemonDetail: (payload) => getPokemonDetail(payload),
  resetPokemonDetail: () => resetPokemonDetail(),
});

export default connect(mapState, mapDispatch)(Detail);
