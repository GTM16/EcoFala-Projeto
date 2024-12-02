import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import globalStyles from '../Styles';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Verifica se os campos estão preenchidos
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("User logado", user);
          navigation.navigate('Pacientes'); // Redireciona para a tela "Pacientes"
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert('Erro', 'E-mail ou senha incorretos!');
        });

  };

  return (
    <View style={globalStyles.loginContainer}>
      {/* Logo */}
      <View style={globalStyles.logoContainer}>
        <Image
          source={require('./Logo.png')}
          style={globalStyles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Campo de email */}
      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        placeholderTextColor="#FFF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Campo de senha */}
      <TextInput
        style={globalStyles.input}
        placeholder="Senha"
        placeholderTextColor="#FFF"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Botão de login */}
      <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Links adicionais */}
      <View style={globalStyles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('RedefinirSenha')}>
          <Text style={globalStyles.linkText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}