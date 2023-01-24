import { TextInput, SafeAreaView, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import  Icon  from 'react-native-vector-icons/Ionicons';


export default function autenticacao4() {
  return (

    <View style={styles.container}>

      <View style={ styles.icones }>
      <Icon name="ios-arrow-back-sharp" size={18} style={ styles.icone1 } />
      <Text> Dados pessoais </Text>
      <Icon name="ios-information-circle-outline" size={18} style={ styles.icone2 } />
      </View>

      <Icon name="person-circle-outline" size={200} style={ styles.icone3 }/>

      <Text style={ styles.acesso } > Enviar foto </Text>

      <SafeAreaView>
        <TextInput style={styles.input} placeholder="Nome completo" />
        <TextInput style={styles.input} placeholder="Data de nascimento" />
        <TextInput style={styles.input} placeholder="Telefone" keyboardType="numeric" />
      </SafeAreaView>
  

      <SafeAreaView style={ styles.botoes }>
        <Button buttonStyle={styles.botao1} title='Pular'/>
        <Button buttonStyle={styles.botao2} title='Cadastrar'/>      
      </SafeAreaView>
      
    
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

  icones: {
    position: 'absolute',
    top: 60,
    display: 'flex',
    flexDirection: 'row',
  },

  icone1: {
    position: 'relative',
    left: -100,
  },

  icone2: {
    position: 'relative',
    left: 50,
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

  botoes: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 100,
  },

  botao1: {
    width: 151,
    height: 56,
    backgroundColor: '#F8F8F9',
    borderRadius: 12,
  },

  botao2: {
    width: 151,
    height: 56,
    backgroundColor: '#F09200',
    borderRadius: 12,
    color: '#0000000',
  },

});
