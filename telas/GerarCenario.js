import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import globalStyles from '../Styles';
import { useNavigation } from '@react-navigation/native';

// Função para chamar a API de IA
const gerarCenarioIA = async (titulo, descricao) => {
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD2MNW2_166--QGu4AlKYyZxLTD09Ad_uw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer AIzaSyD2MNW2_166--QGu4AlKYyZxLTD09Ad_uw',
      },
      body: JSON.stringify({
        prompt: `Crie uma história infantil com o título "${titulo}" e a descrição "${descricao}".`,
      }),
    });

    // Verificando o status da resposta
    if (!response.ok) {
      console.error(`Erro na resposta da API: ${response.status} - ${response.statusText}`);
      throw new Error('Erro na resposta da API');
    }

    const data = await response.json();
    console.log("Resposta completa da API:", data); // Verificando a resposta completa

    // Verificar a estrutura da resposta da API
    if (data && data.result && data.result.content) {
      return data.result.content;
    } else {
      console.error('Campo "content" ou "result" não encontrado na resposta da API.');
      throw new Error('Campo "content" ou "result" não encontrado na resposta da API.');
    }
  } catch (error) {
    console.error('Erro ao chamar a API:', error);
    throw error;
  }
};

export default function GerarCenario() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const navigation = useNavigation();

  const handleGerar = async () => {
    if (!titulo || !descricao) {
      Alert.alert('Erro', 'Por favor, preencha o título e a descrição.');
      return;
    }

    try {
      const cenario = await gerarCenarioIA(titulo, descricao);
      navigation.navigate('Cenarios', { titulo, descricao, cenario }); // Navegação com os dados
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível gerar o cenário. Tente novamente.');
    }
  };

  return (
    <View style={globalStyles.cenarioContainer}>
      <Text style={globalStyles.headerGerar}>CENÁRIO PERSONALIZADO</Text>

      <TextInput
        style={globalStyles.inputCenario}
        placeholder="Título"
        placeholderTextColor="#666"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={globalStyles.inputCenario}
        placeholder="Descrição"
        placeholderTextColor="#666"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TouchableOpacity style={globalStyles.cadastroButton} onPress={handleGerar}>
        <Text style={globalStyles.cadastroButtonText}>Gerar</Text>
      </TouchableOpacity>
    </View>
  );
}
