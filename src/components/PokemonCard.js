import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { getPokeIdFromURL } from "../transforms/common";

const PokemonCard = (props) => {
  const { item, index, navigation } = props;

  console.tron.log(item.url);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DetailScreen", {
          pokemonDetailURL: item.url,
        })
      }
      style={[
        style.cardContainer,
        style.shadow,
        index % 2 === 0 ? style.cardOdd : style.cardEven,
      ]}
    >
      <Image
        style={style.image}
        resizeMode={"contain"}
        source={{
          uri: `https://pokeres.bastionbot.org/images/pokemon/${getPokeIdFromURL(
            item.url
          )}.png`,
        }}
      />
      <View style={style.descriptionContainer}>
        <Text style={style.title} numberOfLines={2}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;

const style = StyleSheet.create({
  cardContainer: {
    width: wp("45%"),
    height: hp("25%"),
    backgroundColor: "#FFFF",
    borderRadius: 8,
  },
  descriptionContainer: {
    alignItems: "center",
  },
  title: { fontSize: 14, fontWeight: "bold", color: "#5D6A70" },
  image: {
    width: wp("45%"),
    height: hp("20%"),
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  cardOdd: {
    marginBottom: 12,
    marginRight: 8,
  },
  cardEven: {
    marginBottom: 12,
  },
});
