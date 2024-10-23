import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import HomeStyles from '../styles/HomeStyles';

export default function HomeScreen({navigation }) {
    return (
        <View style={HomeStyles.container}>
        <text style={HomeStyles.title}>Bem-vindo à Tela Inicial!</text>
        <TouchableOpacity style={HomeStyles.Button} onPress={()=>
        navigation.navigate('Sobre')}>
            <Text style={HomeStyles.ButtonText}>Sobre</Text>
            </TouchableOpacity>
        </View>
    );
} 