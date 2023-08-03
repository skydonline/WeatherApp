import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";
import { useGetWeather } from "./src/hooks/useGetWeather";

export default function App() {
    const [loading, error, weather] = useGetWeather();
    console.log(loading, error, weather);

    if (weather && weather.current) {
        return (
            <NavigationContainer>
                <Tabs weather={weather} />
            </NavigationContainer>
        );
    }

    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color={"lightblue"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
    },
});
