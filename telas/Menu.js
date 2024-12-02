import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../Styles'; 

export default function MainScreen({ navigation, route }) {
  // Recebe os dados do paciente selecionado da tela de Pacientes
  const { selectedPatient } = route.params;

  return (
    <View style={globalStyles.menuContainer}>
      {/* 
      Botão para Listar Cenários 
      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => navigation.navigate('ListarCenario')}  
      >
        <Text style={globalStyles.menuButtonText}>LISTAR CENÁRIOS</Text>
      </TouchableOpacity>
      */}

      {/* Botão para mostrar cenários */}
      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => navigation.navigate('GerarCenario', { paciente: selectedPatient })}  
      >
        <Text style={globalStyles.menuButtonText}>GERAR CENÁRIO</Text>
      </TouchableOpacity>

      {/* Botão para Visualizar Relatórios */}
      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => navigation.navigate('Relatorio', { paciente: selectedPatient })}  
      >
        <Text style={globalStyles.menuButtonText}>VISUALIZAR RELATÓRIOS</Text>
      </TouchableOpacity>

      {/* Botão para Editar Cadastro (passa o paciente selecionado para a tela de Cadastro) */}
      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => navigation.navigate('Cadastro', { paciente: selectedPatient })}  
      >
        <Text style={globalStyles.menuButtonText}>EDITAR CADASTRO</Text>
      </TouchableOpacity>
    </View>
  );
}
