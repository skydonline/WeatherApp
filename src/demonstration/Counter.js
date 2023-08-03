import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Counter() {
    // Create variables that rely on certain functions, and initalize default value
    const [count, setCount] = useState(0);
    const [newCount, setNewCount] = useState(0);
    const { container, title } = styles;

    // Causes for rerendering
    useEffect(() => {
        console.log(`Count changed`);
        return () => {
            console.log("useffect cleanup");
        };
    }, [count]); // Depends on count change, not newCount change
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
            <Button
                color={"red"}
                title={"Increase the count"}
                onPress={() => {
                    setNewCount(newCount + 1);
                }}
            ></Button>
            <Button
                color={"green"}
                title={"Decrease the count"}
                onPress={() => {
                    setNewCount(newCount - 1);
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
