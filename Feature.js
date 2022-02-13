import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Feature({ name, value }) {
  let stars = "";
  for (let i = 0; i < value; i += 1) {
    stars += "☆";
  }
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.value}>{stars}</Text>
    </View>
  );
}

export default Feature;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 7,
  },

  name: {
    fontSize: 14,
    fontFamily: "Futura",
    color: "#FF1493",
    fontWeight: "100",
  },

  value: {
    fontSize: 14,
    color: "#FF1493",
    fontWeight: "500",
  },
});
