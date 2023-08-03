import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);
  const { container, title } = styles;

  return (
    <View style={container}>
      <Text style={title}>{`count: ${count}`}</Text>
      <Button
        color={"red"}
        title={"Increase the count"}
        onPress={() => {
          setCount(count + 1);
        }}
      ></Button>
      <Button
        color={"green"}
        title={"Decrease the count"}
        onPress={() => {
          setCount(count - 1);
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginTop: 25,
  },
});
