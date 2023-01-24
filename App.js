import React from "react";

// Importação das bibliotecas de navegação entre páginas
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importacao das telas construidas e armazenadas na pasta screen
import Inicio  from './screen/Inicio';
import autenticacao1 from './screen/autenticacao1';
import Autenticacao2 from "./screen/Autenticacao2";
import autenticacao3 from './screen/autenticacao3';
import Autenticacao4 from './screen/Autenticacao4';
import Autenticacao5 from './screen/Autenticacao5';

const Tabs = createBottomTabNavigator();

export default function App () {
  return (

    
    <NavigationContainer >

      <Tabs.Navigator>
        <Tabs.Screen name="Início" component = { Inicio }/>
        <Tabs.Screen name="Autenticacao1" component = { autenticacao1 } />
        <Tabs.Screen name="Autenticacao2" component={ Autenticacao2 } />
        <Tabs.Screen name="Autenticacao3" component={ autenticacao3 } />
        <Tabs.Screen name="Autenticacao4" component={ Autenticacao4 } />
        <Tabs.Screen name="Autenticacao5" component={ Autenticacao5 } />
      </Tabs.Navigator>

    </NavigationContainer>
  )
};