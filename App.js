import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBar from './TabBar';

const Stack = createNativeStackNavigator();

export default function App(){
  return(

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicio'>
        <Stack.Screen options={{headerShown: false}} name='tab' component={TabBar}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}