import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HomeStyles from '../styles/HomeStyles'; // Verifique o caminho correto
import { Button } from 'react-native-web';

const image = { uri: 'https://t3.ftcdn.net/jpg/05/00/85/04/360_F_500850425_KGzvN3zMn2Uif4Xa1eQDbV3bqgTNzA4H.jpg' };

export default function HomeScreen({ navigation }) {
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={HomeStyles.container}>
                <Text style={HomeStyles.title}>Bem-vindo ao Conversor!</Text>
                <Text style={HomeStyles.title}>Escolha uma Opção</Text>

                <TouchableOpacity
                    style={HomeStyles.Button}
                    onPress={() => navigation.navigate('ConversorMoeda')}
                >
                    <Text style={HomeStyles.ButtonText}>Conversor de Moeda</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={HomeStyles.Button}
                    onPress={() => navigation.navigate('IMC')}
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
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
