import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, ScrollView, Alert, ActivityIndicator } from 'react-native';
import globalStyles from '../Styles';
import { useNavigation } from '@react-navigation/native';

async function gerarCenarioIA(titulo, descricao) {
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=API_KEY', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: `Crie uma história infantil com o título "${titulo}" e a descrição "${descricao}".`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    if (data && data.result && data.result.content) {
      return data.result.content;
    } else {
      throw new Error('Estrutura inesperada na resposta da API.');
    }
  } catch (error) {
    console.error('Erro ao gerar cenário:', error.message);
    throw error;
  }
}

export default function GerarCenario() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [etapas, setEtapas] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleGerar = async () => {
    if (!titulo.trim() || !descricao.trim()) {
      Alert.alert('Erro', 'Por favor, preencha o título e a descrição!');
      return;
    }

    setLoading(true);
    try {
      const cenario = await gerarCenarioIA(titulo, descricao);
      setEtapas(cenario.etapas || []);
      setImagem(cenario.imagem || '');

      // Navega para a tela "Cenarios" com os dados gerados
      navigation.navigate('Cenarios', { titulo, descricao, cenario });
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível gerar o cenário. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={globalStyles.cenarioContainer}>
      <Text style={globalStyles.headerGerar}>GERAR CENÁRIO</Text>

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
        multiline
        numberOfLines={4}
      />

      <View style={{ marginTop: 20 }}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Button title="Gerar" onPress={handleGerar} />
        )}
      </View>

      {imagem ? (
        <Image
          source={{ uri: imagem }}
          style={{ width: 256, height: 256, marginTop: 20, alignSelf: 'center' }}
        />
      ) : null}

      <ScrollView style={{ marginTop: 20 }}>
        {etapas.map((etapa, index) => (
          <View key={index} style={{ marginBottom: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Etapa {etapa.etapa}:</Text>
            <Text>{etapa.texto}</Text>
            <Text style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Opções:</Text>
              {'\n'}
              {etapa.opcoes.correta && <Text style={{ color: 'green' }}>Correta: {etapa.opcoes.correta}</Text>}
              {'\n'}
              {etapa.opcoes.incorreta && <Text style={{ color: 'red' }}>Incorreta: {etapa.opcoes.incorreta}</Text>}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
