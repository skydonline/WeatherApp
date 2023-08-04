import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

export default function CurrentWeather({ weatherData }) {
    const {
        wrapper,
        container,
        tempStyles,
        feels,
        highLowWrapper,
        highLow,
        bodyWrapper,
        description,
        message,
    } = styles;
    const {
        date,
        day: {
            avgtemp_c,
            maxtemp_c,
            mintemp_c,
            condition: { text },
        },
    } = weatherData[0];

    const weatherCondition = text;

    return (
        <SafeAreaView
            style={[wrapper, { backgroundColor: weatherType[weatherCondition].backgroundColor }]}
        >
            <View style={container}>
                <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
                <Text style={tempStyles}>{avgtemp_c}</Text>
                <Text style={feels}>Feels like 5</Text>
                <RowText
                    containerStyles={highLowWrapper}
                    message1={`High: ${maxtemp_c}`}
                    message2={`High: ${mintemp_c}`}
                    message1Styles={highLow}
                    message2Styles={highLow}
                />
            </View>
            <RowText
                containerStyles={bodyWrapper}
                message1={weatherCondition}
                message2={weatherType[weatherCondition].message}
                message1Styles={description}
                message2Styles={message}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "pink",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    tempStyles: {
        color: "black",
        fontSize: 48,
    },
    feels: {
        color: "black",
        fontSize: 30,
    },
    highLowWrapper: {
        flexDirection: "row",
    },
    highLow: {
        color: "black",
        fontSize: 20,
    },
    bodyWrapper: {
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingLeft: 25,
        marginBottom: 40,
    },
    description: {
        fontSize: 48,
    },
    message: {
        fontSize: 30,
    },
});
