import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    StatusBar,
    ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";

export default function ListItem(props) {
    const { date, min, max, condition } = props;
    console.log(`The condition is: ${condition}`);
    const { item, dateStyles, temp } = styles;
    return (
        <View style={item}>
            <Feather name={weatherType[condition].icon} size={50} color={"white"} />
            <Text style={dateStyles}>{date}</Text>
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
        backgroundColor: "pink",
    },
    temp: {
        color: "white",
        fontSize: 20,
    },
    dateStyles: {
        color: "white",
        fontSize: 50,
    },
    image: {
        flex: 1,
    },
});
