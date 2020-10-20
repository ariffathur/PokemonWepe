import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SearchIcon } from "../components";

const Home = (props) => {
  const { navigation } = props;

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
