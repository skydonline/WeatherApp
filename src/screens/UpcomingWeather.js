import React from "react";
import { StyleSheet, SafeAreaView, FlatList, StatusBar, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";
import ListItem from "../components/ListItem";

export default function UpcomingWeather({ weatherData }) {
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.day.condition.text}
            dt_txt={item.date}
            min={item.day.mintemp_c}
            max={item.day.maxtemp_c}
        />
    );

    const { container, image } = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require("../../assets/upcoming-background.jpg")} style={image}>
                <FlatList
                    data={weatherData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.date}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "royalblue",
    },
    image: {
        flex: 1,
    },
});
