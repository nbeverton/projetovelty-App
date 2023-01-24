import { StatusBar } from 'expo-status-bar';
import { TextInput, SafeAreaView, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import autent3 from '../assets/autent3.png';


export default function autenticacao3() {
  return (
    <View style={styles.container}>


      
      <Image source={ autent3 } style={ styles.imagem } />

      <Text style={ styles.titulo } >Crie sua conta da PEX</Text>

      <Text style={ styles.texto } >Informe o seus dados para criar sua conta 
      na PEX e economizar muito na sua obra</Text>

      <SafeAreaView>
        <TextInput style={styles.input} placeholder="e-mail" />
        <TextInput style={styles.input} placeholder="senha" keyboardType="numeric" />
      </SafeAreaView>

      <Text style={ styles.termos } > Li e aceito os Termos de serviço e políticia 
      de privacidade </Text>
  
      <Button buttonStyle={styles.botao} title='Acessar'/>
        
      <Text style={ styles.acesso } > Não possui uma conta? Criar conta </Text>
        
    
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
    fontSize: 18,
    marginTop: 250,

    width: 311,
    height: 23,
    textAlign: 'left',
  },

  texto: {
    width: 311,
    height: 60,
    fontSize: 14,
    textAlign: 'left',
    color: '#999999',
  },

  termos: {
    width: 271,
    fontSize: 14,
    textAlign: 'left',
    color: '#F09200',
    marginTop: 20,
  },

  acesso: {
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
  },

});
