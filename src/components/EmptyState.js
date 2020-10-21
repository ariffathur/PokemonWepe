import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const EmptyState = (props) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FontAwesome name="warning" size={24} color="black" />
      <Text style={[style.desc, { marginTop: 6 }]}>Data tidak tersedia.</Text>
    </View>
  );
};

export default EmptyState;

const style = StyleSheet.create({
  desc: { color: "#45545B", fontSize: 14 },
});
