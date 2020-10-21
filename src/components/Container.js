import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

const Container = (props) => {
  if (props.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFF",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color={"#3A99D8"} />
        <Text>Please Wait...</Text>
      </View>
    );
  } else {
    return (
      <View
        style={{
          backgroundColor: props.backgroundBlue ? "#F0F7FA" : "#FFF",
          flex: 1,
        }}
      >
        {props.children}
      </View>
    );
  }
};

export default Container;
