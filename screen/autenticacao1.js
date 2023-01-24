import { StatusBar } from 'expo-status-bar';
import { TextInput, SafeAreaView, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import autent1 from '../assets/autent1.png';




export default function App() {
  return (
    <View style={styles.container}>


      
      <Image source={ autent1 } style={ styles.imagem } />

      <Text style={ styles.titulo } >Bem vindo a PEX!</Text>

      <Text style={ styles.texto } >Informe os seus dados para ter acesso 
      a um mundo de economia para sua obra</Text>

      <SafeAreaView>
        <TextInput style={styles.input} placeholder="e-mail" />
        <TextInput style={styles.input} placeholder="senha" keyboardType="numeric" />
      </SafeAreaView>

      <Text style={ styles.senha } > Esqueci minha senha </Text>
  
      <Button buttonStyle={styles.botao} title='Acessar'/>
        
      <Text style={ styles.senha } > Não possui uma conta? Criar conta </Text>
        
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    width: 375,
    height: 812,
  },

  imagem: {
    height: 299,
    width: 375,
    position: 'absolute',
    top: 0,
    left: 0,
  },

  titulo: {
    // fontFamily: 'Plus Jakarta Display',
    fontSize: 32,
    marginTop: 250,

    width: 311,
    height: 41,
    textAlign: 'left',
  },

  texto: {
    width: 311,
    height: 60,
    fontSize: 14,
    textAlign: 'left',
    color: '#999999',
  },

  senha: {
    width: 311,
    fontSize: 14,
    textAlign: 'center',
    color: '#F09200',
    marginTop: 20,
  },

  botao: {
    width: 311,
    height: 56,
    marginTop: 50,
    backgroundColor: '#F09200',

  },

  input: {
    height: 56,
    width: 311,
    margin: 12,
    padding: 10,
    backgroundColor: '#F8F8F9',
  }


});
