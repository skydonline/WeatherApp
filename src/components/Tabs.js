import React from "react";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Tabs({ weather }) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "grey",
                tabBarStyle: {
                    backgroundColor: "lightblue",
                },
                headerStyle: {
                    backgroundColor: "lightblue",
                },
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "red",
                },
            }}
        >
            <Tab.Screen
                name={"Current"}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name={"droplet"} size={25} color={focused ? "blue" : "black"} />
                    ),
                }}
            >
                {() => <CurrentWeather weatherData={weather.forecast.forecastday} />}
            </Tab.Screen>
            <Tab.Screen
                name={"Upcoming"}
                component={UpcomingWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name={"clock"} size={25} color={focused ? "blue" : "black"} />
                    ),
                }}
            />
            <Tab.Screen
                name={"City"}
                component={City}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name={"home"} size={25} color={focused ? "blue" : "black"} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
