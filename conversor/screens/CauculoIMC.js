import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ImcScreen = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [categoria, setCategoria] = useState('');

  const calcularImc = () => {
    // Convertendo os valores inseridos para números
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    // Verificando se os valores são válidos
    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
      Alert.alert('Erro', 'Por favor, insira valores válidos para peso e altura.');
      return;
    }

    // Calculando o IMC
    const resultadoImc = pesoNum / (alturaNum * alturaNum);
    setImc(resultadoImc.toFixed(2)); // Mostra com 2 casas decimais

    // Definindo a categoria do IMC
    if (resultadoImc < 18.5) {
      setCategoria('Abaixo do peso');
    } else if (resultadoImc < 24.9) {
      setCategoria('Peso normal');
    } else if (resultadoImc < 29.9) {
      setCategoria('Sobrepeso');
    } else {
      setCategoria('Obesidade');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <Button title="Calcular IMC" onPress={calcularImc} />

      {imc && (
        <View style={styles.resultado}>
          <Text style={styles.resultadoText}>Seu IMC: {imc}</Text>
          <Text style={styles.resultadoText}>Categoria: {categoria}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  resultado: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  resultadoText: {
    fontSize: 18,
  },
});

export default ImcScreen;
