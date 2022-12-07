import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';
import firebase from '../../service';
export default function FlatListDestaques(props) {
 return (
   <View style={Estilos.ConteinerImgDestaque}>
        <Image source={{uri: props.data.img}} style={{width: 100, height: 100}}/>
         
        <Text></Text>
    </View>
  );
}


const Estilos = StyleSheet.create({
    ConteinerImgDestaque: {
        padding: 10
    },
  
})