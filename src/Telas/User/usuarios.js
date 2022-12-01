import React from 'react';
import { View,Text} from 'react-native';
import * as Animatable from 'react-native-animatable'
export default function Usuarios() {
 return (
   <Animatable.View animation={'fadeIn'} delay={700} duration={1000}style={{flex: 1,backgroundColor: '#FCBF49', justifyContent: 'center',alignItems: 'center'}}>
    <Text style={{fontSize: 18}}> Usuarios</Text>
    </Animatable.View>
  );
}