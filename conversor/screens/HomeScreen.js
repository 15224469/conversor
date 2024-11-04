import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import HomeStyles from '../styles/HomeStyles';

export default function HomeScreen({navigation }) {
    return (
        <View style={HomeStyles.container}>
        <text style={HomeStyles.title}>Bem-vindo ao Conversor!</text>
        <text style={HomeStyles.title}>Escolha uma Opição</text>
        <TouchableOpacity 
                style={HomeStyles.Button} 
                onPress={() => navigation.navigate('ConversorMoeda')}
            >
                <Text style={HomeStyles.ButtonText}>Conversor de Moeda</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={HomeStyles.Button} 
                onPress={() => navigation.navigate('CalculoIMC')}
            >
                <Text style={HomeStyles.ButtonText}>Cálculo de IMC</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={HomeStyles.Button} 
                onPress={() => navigation.navigate('CalculoMedida')}
            >
                <Text style={HomeStyles.ButtonText}>Cálculo de Medida</Text>
            </TouchableOpacity>
        </View>
    );
}