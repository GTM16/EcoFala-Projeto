import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({

  // Estilos da tela de login
  loginContainer: {
    flex: 1,
    backgroundColor: '#72C3B2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logoText: {
    fontSize: 48,
    color: '#FFF',
    fontWeight: 'bold',
  },
  logoImage: {
    width: 300, // Defina a largura desejada
    height: 300, // Defina a altura desejada
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#FFF',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#72C3B2',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linksContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: '#FFF',
    fontSize: 16,
    marginVertical: 5,
  },

  // Estilos do menu
  menuContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  menuButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#72C3B2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  menuButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Estilos da tela de seleção de pacientes
  pacientesContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  pacientesTitulo: {
    fontSize: 36,
    color: '#72C3B2',
    marginTop: 80,
    marginBottom: 80,
    textAlign: 'center',
  },
  pacienteContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  pacienteFoto: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  pacienteNome: {
    color: '#72C3B2',
    marginTop: 5,
  },
  pacienteButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#72C3B2',
    borderRadius: 25,
    justifyContent: 'center',
    marginBottom: 40,
    alignItems: 'center',
    marginVertical: 10,
  },

  // Estilos da tela de cadastro
  cadastroContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    padding: 8,
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 12,
    width: '90%',
  },
  label: {
    marginLeft: 12,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#72C3B2',
  },
  cadastroInput: {
    height: 40,
    borderColor: '#72C3B2',
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 25,
  },
  cadastroButton: {
    width: '90%',
    height: 40,
    backgroundColor: '#72C3B2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cadastroButtonText: {
    color: 'WHITE',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraph: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Estilos da tela de Listar Cenário
  card: {
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitulo: {
    marginLeft: 12,
    marginBottom: 8,
    fontWeight: '600', // Alterado para '600' para um estilo correto
    fontSize: 16,
  },
  cardDescricao: {
    marginLeft: 12,
    marginBottom: 8,
    marginTop: 5,
    fontSize: 14,
  },

  // Estilo da tela de gerar cenário
  inputCenario: {
    width: '90%',
    height: 50,
    borderColor: '#165C4D',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  textAreaCenario: {
    width: '90%',
    height: 200,
    borderColor: '#165C4D',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  cenarioContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0.5,
  },
  cenarioText: {
    fontSize: 16,
    color: '#333',
  },
  headerGerar: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#72C3B2',
    textAlign: 'center',
    marginBottom: 36,
  },

  // Estilo da tela de feedback
  feedbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    padding: 20,
  },
  feedbackScrollContainer: {
    padding: 8,
    alignItems: 'center',
  },
  feedbackTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 10,
    textAlign: 'center',
  },
  feedbackInputContainer: {
    marginBottom: 15,
    width: '90%',
  },
  feedbackLabel: {
    marginLeft: 12,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#72C3B2',
  },
  feedbackInput: {
    borderWidth: 1,
    borderColor: '#72C3B2',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },

  // Estilo tela de relatório
  relatorioContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: "white",
    padding: 20,
  },
  relatorioLabel: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
  relatorioTextInput: {
    height: 150,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    width: '100%',
  },
  relatorioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  },

  // Estilos tela de cenario
  historiaContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  historiaScrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  historiaParagraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  historiaImage: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  historiaButtonContainer: {
    marginTop: 20,
    borderRadius: 25,
    width: '90%',
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

});

export default globalStyles;
