import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Feature from "./Feature";

function Item(props) {
  const { data, index, selection } = props;
  const { breed } = data;
  const keys = Object.keys(data).filter((key) => key !== "breed");
  const average = (
    keys.reduce((acc, key) => {
      return acc + data[key];
    }, 0) / keys.length
  ).toFixed(1);
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>
          {selection === "cats" ? "🐈‍⬛" : "🐩"} {index}: {breed}
        </Text>
        <Text style={styles.label}>{average}</Text>
      </View>

      {/* {keys.map(key => <Text>{key} {data[key]}</Text>)} */}
      {keys.map((key) => (
        <Feature key={`feature-${key}`} name={key} value={data[key]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    margin: 7,
  },
  label: {
    fontSize: 14,
    fontFamily: "Futura",
    color: "#FF1493",
    fontWeight: "bold",
    padding: 7,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Item;
