import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './telas/Login';
import Menu from './telas/Menu';
import Pacientes from './telas/Pacientes';
import Cadastro from './telas/Cadastro';
import ListarCenario from './telas/ListarCenario';
import GerarCenario from './telas/GerarCenario';
import Feedback from './telas/Feedback';
import Relatorio from './telas/Relatorio';
import ListarRelatorios from './telas/ListarRelatorios';
import Cenarios from './telas/Cenarios'; // Tela de escolha de cenários
import Historia from './telas/Historia'; // Tela para exibir a história escolhida
import { initFirebase } from './firebaseConfig';

const Stack = createStackNavigator();

export default function App() {
  initFirebase();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pacientes">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ title: 'Menu Principal' }}
        />
        <Stack.Screen
          name="Pacientes"
          component={Pacientes}
          options={{ title: 'Selecionar Pacientes', headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: 'Cadastro' }}
        />
        <Stack.Screen
          name="ListarCenario"
          component={ListarCenario}
          options={{ title: 'Listar Cenários' }}
        />
        <Stack.Screen
          name="GerarCenario"
          component={GerarCenario}
          options={{ title: 'Gerar Cenário' }}
        />
        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{ title: 'Feedback' }}
        />
        <Stack.Screen
          name="Relatorio"
          component={Relatorio}
          options={{ title: 'Relatório' }}
        />
        <Stack.Screen
          name="ListarRelatorios"
          component={ListarRelatorios}
          options={{ title: 'Listar Relatórios' }}
        />
        {/* Adicionando a tela de escolha de cenários */}
        <Stack.Screen
          name="Cenarios"
          component={Cenarios}
          options={{ title: 'Escolher Cenários' }}
        />
        {/* Adicionando a tela de exibição de história */}
        <Stack.Screen
          name="Historia"
          component={Historia}
          options={{ title: 'História' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
