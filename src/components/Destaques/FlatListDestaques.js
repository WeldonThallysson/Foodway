import React from 'react';
import { View,Image,StyleSheet } from 'react-native';

export default function FlatListDestaques(props) {
 return (
   <View style={Estilos.ConteinerImgDestaque}>
        <Image source={{uri: props.data.img}} style={{width: 100, height: 100}}/>
    </View>
  );
}


const Estilos = StyleSheet.create({
    ConteinerImgDestaque: {
        padding: 10
    },
  
})