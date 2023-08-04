import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import Tabs from "./src/components/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

export default function App() {
    const [loading, error, weather] = useGetWeather();
    console.log(loading, error, weather);

    if (weather && weather.current && !loading) {
        return (
            <NavigationContainer>
                <Tabs weather={weather} />
            </NavigationContainer>
        );
    }

    return (
        <View style={styles.container}>
            {error ? <ErrorItem /> : <ActivityIndicator size={"large"} color={"lightblue"} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
    },
});
