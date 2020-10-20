import React from "react";
import PropTypes from "prop-types";
import { View, TextInput, Platform, StyleSheet } from "react-native";
import { SearchIcon } from "../components";

const SearchInput = (props) => {
  return (
    <View style={style.container}>
      <SearchIcon color="#979797" size={16} />
      <TextInput
        style={style.textInput}
        placeholder={props.placeholder}
        placeholderTextColor="#5D6A70"
      />
    </View>
  );
};

SearchInput.propsTypes = {
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: "Cari nama pokemon",
};

export default SearchInput;

const style = StyleSheet.create({
  container: {
    marginHorizontal: Platform.OS === "ios" ? 16 : 0,
    height: 34,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F2F7F8",
    borderRadius: 6,
    paddingHorizontal: 16,
  },
  textInput: {
    marginLeft: 16,
    fontSize: 12,
    width: "100%",
    color: "#5D6A70",
  },
});
