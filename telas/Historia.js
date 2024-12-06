import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import globalStyles from '../Styles';

export default function Historia({ route, navigation }) {
  const { historia } = route.params || {}; // Acessa o objeto historia corretamente
  const [etapaAtual, setEtapaAtual] = useState(0);

  if (!historia || !historia.etapas || historia.etapas.length === 0) {
    return (
      <View style={globalStyles.historiaContainer}>
        <Text style={{ color: 'red', fontSize: 16 }}>História inválida ou etapas não encontradas.</Text>
      </View>
    );
  }

  const etapa = historia.etapas[etapaAtual];

  const handleEscolha = (escolha) => {
    if (escolha === etapa.opcoes.correta) {
      if (etapaAtual + 1 < historia.etapas.length) {
        setEtapaAtual(etapaAtual + 1);
      } else {
        Alert.alert('Parabéns!', 'Você completou a história!');
        navigation.goBack();
      }
    } else {
      Alert.alert('Errado', 'Tente novamente!');
    }
  };

  return (
    <View style={globalStyles.historiaContainer}>
      <Image source={{ uri: historia.imagem }} style={globalStyles.historiaImagem} />
      <Text style={globalStyles.historiaTexto}>{etapa.texto}</Text>
      <View style={globalStyles.opcoesContainer}>
        <TouchableOpacity
          style={globalStyles.opcaoButton}
          onPress={() => handleEscolha(etapa.opcoes.correta)}
        >
          <Text style={globalStyles.opcaoTexto}>{etapa.opcoes.correta}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.opcaoButton}
          onPress={() => handleEscolha(etapa.opcoes.incorreta)}
        >
          <Text style={globalStyles.opcaoTexto}>{etapa.opcoes.incorreta}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
