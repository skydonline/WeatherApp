import React from "react";
import { View, SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar } from "react-native";
import IconText from "../components/IconText";

export default function City({ weatherData }) {
    const {
        container,
        cityName,
        cityText,
        countryName,
        populationWrapper,
        populationText,
        riseSetText,
        riseSetWrapper,
        rowLayout,
        imageLayout,
    } = styles;

    const {
        location: { name, country, localtime_epoch },
        forecast: { forecastday },
    } = weatherData;

    const {
        astro: { sunrise, sunset },
    } = forecastday[0];
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require("../../assets/seattle-background.jpg")}
                style={imageLayout}
            >
                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName={"user"}
                        iconColor={"red"}
                        bodyText={`Population: ${localtime_epoch}`}
                        bodyTextStyles={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText
                        iconName={"sunrise"}
                        iconColor={"white"}
                        bodyText={sunrise}
                        bodyTextStyles={riseSetText}
                    />
                    <IconText
                        iconName={"sunset"}
                        iconColor={"white"}
                        bodyText={sunset}
                        bodyTextStyles={riseSetText}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: "bold",
        color: "white",
    },
    populationWrapper: {
        justifyContent: "center",
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: "red",
    },
    riseSetWrapper: {
        justifyContent: "space-around",
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: "white",
    },
    rowLayout: {
        flexDirection: "row",
        alignItems: "center",
    },
});
