import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import logo from '../assets/logo.png';


export default function Inicio() {
  return (
    <View style={styles.container}>

      
      <Image source={ logo } style={ styles.imagem } />

      <Text style={ styles.titulo } >Bem vindo a PEX</Text>
      <Text style={ styles.texto } >Economize tempo e dinheiro em todas as etapas da sua obra. 
        Na reforma ou construção nós iremos te auxiliar em tudo.</Text>

        <View style={styles.botao} /> 
          <Button title=''/>
        <View/>
        
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    width: 375,
    height: 812,
  },

  imagem: {
  position: 'absolute',
  top: 241,
  height: 121,
  width: 224,
  left: 76,
  },

  titulo: {
    // fontFamily: 'Plus Jakarta Display',
    fontSize: 32,
    marginTop: 400,

    width: 311,
    height: 41,
    textAlign: 'center',

    display: 'flex',
    alignItems: 'center',

  },

  texto: {
    width: 311,
    height: 60,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },

  botao: {
    width: 62,
    height: 62,
    borderRadius: 84,
    backgroundColor: '#F09200',
    left: 110,
    top: 90,
  },


});
