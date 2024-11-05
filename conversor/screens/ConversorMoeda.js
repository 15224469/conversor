import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ConversorMoedaScreen = () => {
  const [valor, setValor] = useState('');
  const [valorConvertido, setValorConvertido] = useState(null);
  const [moeda, setMoeda] = useState('');

  // Função para realizar a conversão de moeda (exemplo: de BRL para USD)
  const converterMoeda = () => {
    const taxaConversao = 0.20; // Taxa de conversão fixa (1 BRL = 0.20 USD)

    // Convertendo o valor inserido para número
    const valorNum = parseFloat(valor);

    // Verificando se o valor inserido é válido
    if (isNaN(valorNum) || valorNum <= 0) {
      Alert.alert('Erro', 'Por favor, insira um valor válido.');
      return;
    }

    // Realizando a conversão
    const resultadoConversao = valorNum * taxaConversao;
    setValorConvertido(resultadoConversao.toFixed(2)); // Mostra com 2 casas decimais

    // Definindo a moeda de destino (apenas um exemplo simples)
    setMoeda('USD (Dólar)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moeda</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o valor em Reais"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <Button title="Converter" onPress={converterMoeda} />

      {valorConvertido && (
        <View style={styles.resultado}>
          <Text style={styles.resultadoText}>
            {`Valor em ${moeda}: ${valorConvertido}`}
          </Text>
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

export default ConversorMoedaScreen;
