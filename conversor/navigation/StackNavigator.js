import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CauculoIMC from '../screens/CauculoIMC';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="IMC" component={CauculoIMC} />
      <StackScreen name="ConversorMoeda" component={Conversormoeda} />
    </Stack.Navigator>
  );
}