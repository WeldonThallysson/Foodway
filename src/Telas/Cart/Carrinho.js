import React from 'react';
import { View,Text,StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable'
export default function Carrinho() {
 return (
   <Animatable.View animation={'fadeIn'} delay={700} duration={1000} style={{flex: 1, justifyContent: 'center',alignItems: 'center',backgroundColor: '#FCBF49',}}>
    <Text style={{fontSize: 18}}>Carrinho</Text>
   </Animatable.View>
  );
}