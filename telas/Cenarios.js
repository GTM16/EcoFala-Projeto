import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Para acessar os parâmetros passados
import globalStyles from '../Styles';

// Função para chamar a API de IA
const gerarHistoria = async (titulo, descricao) => {
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD2MNW2_166--QGu4AlKYyZxLTD09Ad_uw', { // Substitua pela URL da sua API
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: `Crie uma história infantil com o título "${titulo}" e a descrição "${descricao}".`,
      }),
    });

    const data = await response.json();
    return data.story || 'História não gerada, tente novamente.'; // Ajuste conforme o retorno da API
  } catch (error) {
    console.error('Erro ao chamar a API:', error);
    throw error;
  }
};

export default function Cenarios() {
  const route = useRoute(); // Pega os parâmetros passados
  const { titulo, descricao } = route.params; // Desestruturação dos parâmetros

  const [historia, setHistoria] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHistoria = async () => {
      setLoading(true);
      try {
        const historiaGerada = await gerarHistoria(titulo, descricao);
        setHistoria(historiaGerada);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível gerar a história.');
      } finally {
        setLoading(false);
      }
    };

    fetchHistoria();
  }, [titulo, descricao]); // Reexecuta o efeito quando o título ou a descrição mudam

  return (
    <View style={globalStyles.cenarioContainer}>
      <Text style={globalStyles.headerGerar}>História Gerada</Text>
      
      <Text style={globalStyles.tituloHistoria}>{titulo}</Text>
      <Text style={globalStyles.descricaoHistoria}>{descricao}</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text style={globalStyles.historiaTexto}>{historia}</Text>
      )}

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
