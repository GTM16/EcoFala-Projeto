import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import globalStyles from '../Styles'; 
import { getDatabase, ref, onValue, set, update, push } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid'; // Importa a biblioteca uuid

const Pacientes = ({ navigation, route }) => {
  const [patients, setPatients] = useState({});
  const db = getDatabase();

  useEffect(() => {
    const patientsRef = ref(db, 'patients');

    // Listener para obter a lista de pacientes
    const unsubscribe = onValue(patientsRef, (snapshot) => {
      const data = snapshot.val() || {};
      console.log("Pacientes recebidos:", data); // Log dos dados recebidos
      setPatients(data);
    });

    // Função para adicionar um novo paciente
    const addNewPatient = (newPatient) => {
      const newPatientId = uuidv4(); // Gera um ID único
      set(ref(db, `patients/${newPatientId}`), { ...newPatient, id: newPatientId })
        .then(() => console.log("Novo paciente adicionado:", newPatient))
        .catch((error) => console.error("Erro ao adicionar paciente:", error));
    };

    // Função para atualizar um paciente existente
    const updateExistingPatient = (updatedPatient) => {
      update(ref(db, `patients/${updatedPatient.id}`), updatedPatient)
        .then(() => console.log("Paciente atualizado:", updatedPatient))
        .catch((error) => console.error("Erro ao atualizar paciente:", error));
    };

    // Adicionando um novo paciente se necessário
    if (route.params?.updatedPatient) {
      updateExistingPatient(route.params.updatedPatient);
    }

    if (route.params?.newPatient) {
      addNewPatient(route.params.newPatient);
    }

    return () => unsubscribe(); // Limpar listener ao desmontar
  }, [route.params?.updatedPatient, route.params?.newPatient]);

  const handleSelectPatient = (patientId) => {
    navigation.navigate('Menu', { selectedPatient: patients[patientId] });
  };

  const handleAddPatient = () => {
    navigation.navigate('Cadastro', { isNewPatient: true });
  };

  return (
    <View style={globalStyles.pacientesContainer}>
      <Text style={globalStyles.pacientesTitulo}>Selecionar Pacientes</Text>
      <FlatList
        data={Object.values(patients)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          console.log("Paciente renderizado:", item); // Log do paciente renderizado
          return (
            <TouchableOpacity onPress={() => handleSelectPatient(item.id)}>
              <View style={globalStyles.pacienteContainer}>
                <Image source={{ uri: item.foto }} style={globalStyles.pacienteFoto} />
                <Text style={globalStyles.pacienteNome}>{item.nome}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity 
        style={globalStyles.pacienteButton} 
        onPress={handleAddPatient}
      >
        <Text style={globalStyles.menuButtonText}>ADICIONAR PACIENTE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pacientes;
