import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import globalStyles from '../Styles';

export default function Cenarios({ navigation, route }) {
  const [historias, setHistorias] = useState([]);

  useEffect(() => {
    if (route.params?.novoCenario) {
      setHistorias((prevHistorias) => [...prevHistorias, route.params.novoCenario]);
    }
  }, [route.params?.novoCenario]);

  return (
    <SafeAreaView style={globalStyles.cenariosContainer}>
      <Text style={globalStyles.titulo}>Escolha um Cenário</Text>
      <FlatList
        data={historias}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={globalStyles.cenarioItem}
            onPress={() => navigation.navigate('Historia', { historia: item })}
          >
            <Text style={globalStyles.cenarioTitulo}>{item.texto}</Text>
            <Image source={{ uri: item.imagem }} style={globalStyles.cenarioImagem} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
