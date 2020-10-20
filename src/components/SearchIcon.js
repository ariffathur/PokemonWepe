import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchIcon = (props) => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      <FontAwesome name="search" size={props.size} color={props.color} />
    </TouchableOpacity>
  );
};

SearchIcon.propsTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func,
  size: PropTypes.number,
  color: PropTypes.string,
};

SearchIcon.defaultProps = {
  onPress: null,
  style: null,
  size: 24,
  color: "#ffff",
};

export default SearchIcon;
