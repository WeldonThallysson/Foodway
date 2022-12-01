import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function Cabecalho() {
  return (
    <Animatable.View animation={'fadeIn'} delay={700} duration={1000}  style={Estilos.ContainerPrincipal}>
        <View style={Estilos.ContainerImg}>
         <Image source={require('../../imgs/Up.png')} style={Estilos.img}/>
       
         <View style={Estilos.icone}>
          <TouchableOpacity onPress={() => {}}>
            
           <FontAwesome name={'shopping-cart'} color={'#424242'} size={30} />
          </TouchableOpacity>
         </View>
        </View>

    </Animatable.View>
  )
}


const Estilos = StyleSheet.create({
  ContainerPrincipal:{
    flex:1/7.5,
    backgroundColor: 'orange'
  },
  ContainerImg:{
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'flex-start',
   marginBottom: 1  ,
   
  },
  img:{
    width: 95,  
    height: 75,
  },
  icone:{
    margin: '5.5%'
  }
})