import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBar from './TabBar';
import Cadastro from './src/Telas/Tela-Cadastro/Cadastro'
import Login from './src/Telas/Tela-Login/Login';

const Stack = createNativeStackNavigator();

export default function App(){
  return(

    <NavigationContainer>
      <Stack.Navigator initialRouteName='tab'>
      <Stack.Screen options={{headerShown: false}} name='Login' component={Login}/> 
         <Stack.Screen options={{headerShown: false}}name='cadaster' component={Cadastro}/> 

        <Stack.Screen options={{headerShown: false}} name='tab' component={TabBar}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}