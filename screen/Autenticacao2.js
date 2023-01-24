import { ScrollView, StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/AntDesign';


export default function Autenticacao2() {
  return (

    <View style={styles.container}>

      <View style={ styles.icones }>
      <Icon name="arrowleft" size={15} style={ styles.icone1 } />
      <Icon name="upload" size={15} style={ styles.icone2 } />
      </View>
      
      <Text style={ styles.termos } > Última atualização: Outubro/2022 </Text>
      <Text style={ styles.titulo } >Termos de uso</Text>

      <SafeAreaView style={ styles.caixaTexto } >
      <ScrollView>
      <Text>1. Termos</Text>
      <Text style={ styles.texto } > Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat, eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed sapien ut convallis fringilla. Augue arcu sit odio proin cras purus, nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate. </Text>
      <Text>2. Licença de uso</Text>
      <Text style={ styles.texto } > Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat, eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed sapien ut convallis fringilla. Augue arcu sit odio proin cras purus, nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate. Lorem malesuada tempor imperdiet nulla nulla integer et. Tincidunt sit mauris fringilla nunc nibh erat quis auctor. Urna auctor molestie lectus sagittis fringilla tincidunt. Eget justo, odio sit vulputate velit cursus. Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat, eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed sapien ut convallis fringilla. Augue arcu sit odio proin cras purus, nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate. Lorem malesuada tempor imperdiet nulla nulla integer et. Tincidunt sit mauris fringilla nunc nibh erat quis auctor. Urna auctor molestie lectus sagittis fringilla tincidunt. Eget justo, odio sit vulputate velit cursus. </Text>
      <Text>3. Licença de uso</Text>
      <Text style={ styles.texto } > Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat, eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed sapien ut convallis fringilla. Augue arcu sit odio proin cras purus, nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate. Lorem malesuada tempor imperdiet nulla nulla integer et. Tincidunt sit mauris fringilla nunc nibh erat quis auctor. Urna auctor molestie lectus sagittis fringilla tincidunt. Eget justo, odio sit vulputate velit cursus. Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat, eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed sapien ut convallis fringilla. Augue arcu sit odio proin cras purus, nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate. Lorem malesuada tempor imperdiet nulla nulla integer et. Tincidunt sit mauris fringilla nunc nibh erat quis auctor. Urna auctor molestie lectus sagittis fringilla tincidunt. Eget justo, odio sit vulputate velit cursus. </Text>
      </ScrollView>
      </SafeAreaView>

      
  
      <Button buttonStyle={styles.botao} title=''/>
        
      
        
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#ffffff',
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
    position: 'absolute',
    left: -150,
  },

  icone2: {
    position: 'absolute',
    left: 100,
  },

  termos: {
    width: 311,
    fontSize: 12,
    marginTop: 120,
    textAlign: 'left',
    color: '#999999',
  },

  titulo: {
    // fontFamily: 'Plus Jakarta Display',
    fontSize: 24,
    width: 311,
    height: 31,
    textAlign: 'left',
  },

  caixaTexto: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    width: 302,
    height: 565,
    top: 50,
  },

  texto: {
    width: 295,
    height: 207,
    fontSize: 14,
    textAlign: 'left',
    color: '#999999',
  },

  botao: {
    width: 56,
    height: 56,
    borderRadius: 100,
    marginTop: 50,
    backgroundColor: '#F09200',
  },

});
