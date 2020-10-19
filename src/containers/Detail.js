import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Detail = () => {
  return (
    <View style={styles.container}>
      <Text>PT. Warung Pintar Sekali</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
