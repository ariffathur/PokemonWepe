import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text>Pengen jadi AnWar!</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("DetailScreen")}
      >
        <Text>Go To Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
