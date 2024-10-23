import React from "react";
import {createNativeStackNavigator } from '@react-navigator/native-stack';
import HomeScren from '../screens/HomeScren.js';

const stack = createNativeStackNavigator();

export default function StackNavigator() {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScren} />
        </Stack.Navigator>
    );
}