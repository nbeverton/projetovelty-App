import { SafeAreaView, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import  Icon  from 'react-native-vector-icons/Ionicons';
import { autent5 } from '../assets/autent5.png';

export default function autenticacao5() {
  return (

    <View style={styles.container}>

      <Icon name="ios-arrow-back-sharp" size={18} style={ styles.icone1 } />

      <Text style={ styles.titulo } >Crie sua conta da PEX</Text>

      <Text style={ styles.texto } >Informe o seus dados para criar sua conta 
        na PEX e economizar muito na sua obra</Text>
  
      <SafeAreaView>
          < Image source={ autent5 } style={ styles.imagem } />
      </SafeAreaView>
      
  
      <Button buttonStyle={styles.botao1} title='Habilitar FaceID'/>      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',

    position: 'absolute',
    width: 375,
    height: 812,
  },

  icone1: {
    position: 'relative',
    left: -100,
  },

  imagem: {
    height: 299,
    width: 375,
  },

  acesso: {
    fontSize: 14,
    textAlign: 'center',
    color: '#F09200',
  },

  input: {
    height: 56,
    width: 311,
    margin: 12,
    padding: 10,
    backgroundColor: '#F8F8F9',
    borderRadius: 12,
  },

  botao1: {
    width: 311,
    height: 56,
    backgroundColor: '#F09200',
    borderRadius: 12,
  },

});
