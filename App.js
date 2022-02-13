import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";
import Item from "./Item";
import { cats, dogs } from "./breeds";

export default function App() {
  const [search, setSarch] = useState("");
  const [breeds, setBreeds] = useState("cats");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 125 : 0;
  const breedDict = breeds === "cats" ? cats : dogs;
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={styles.kav}
      >
        <StatusBar style="light" />
        <View style={styles.listContainer}>
          <FlatList
            data={breedDict.filter((item) => item.breed.includes(search))}
            renderItem={({ item, index }) => {
              return <Item index={index} data={item} selection={breeds} />;
            }}
            keyExtractor={(item) => item.breed}
          />
        </View>
        <View style={styles.buttons}>
          <Button
            onPress={() => setBreeds("cats")}
            title="Cats"
            color={"#FF1493"}
          />
          <Button
            onPress={() => setBreeds("dogs")}
            title="Dogs"
            color={"#FF1493"}
          />
        </View>
        <View>
          <TextInput
            style={styles.search}
            placeholder="Search"
            onChangeText={setSarch}
            value={search}
            placeholderTextColor={"#FF1493"}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  kav: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
    marginBottom: 130,
  },

  listContainer: {
    width: "100%",
  },

  container: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
  },

  search: {
    fontSize: 21,
    padding: 7,
    color: "#FF1493",
    fontFamily: "Helvetica",
    fontWeight: "100",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
