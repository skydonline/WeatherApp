import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import moment from "moment";

export default function ListItem(props) {
    const { dt_txt, min, max, condition } = props;
    console.log(`The condition is: ${condition}`);
    const { item, dateStyles, temp, dateTextWrapper } = styles;
    return (
        <View style={item}>
            <Feather name={weatherType[condition].icon} size={50} color={"white"} />
            <View style={dateTextWrapper}>
                <Text style={dateStyles}>{moment(dt_txt).format("dddd")}</Text>
                <Text style={dateStyles}>{moment(dt_txt).format("MMM Do YY")}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "indianred",
    },
    temp: {
        color: "white",
        fontSize: 20,
    },
    dateStyles: {
        color: "white",
        fontSize: 50,
    },
    dateTextWrapper: {
        flexDirection: "column",
    },
    image: {
        flex: 1,
    },
});
