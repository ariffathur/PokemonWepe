import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchInput from "../components/SearchInput";

const Search = (props) => {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <SearchInput />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Cari Pokemon</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
