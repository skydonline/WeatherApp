import React from "react";
import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import Counter from "./src/demonstration/Counter";

export default function App() {
  return (
    <NavigationContainer>
      <Counter />
    </NavigationContainer>
  );
}
