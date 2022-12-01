import React from 'react';
import { View,Text,FlatList, StyleSheet } from 'react-native';
import FlatListDestaques from '../Destaques/FlatListDestaques'
import DadosDestaques from '../../Dados/DadosDestaques/DadosDestaques'
export default function Destaques() {
 return (
   <View style={Estilos.ConteinerDestaques}>

     <Text>Burguers</Text>
     <FlatList 
      data={DadosDestaques}
      keyExtractor={item => item.id} 
      renderItem={({item}) => <FlatListDestaques data={item}/>} 
     />
   </View>
  );
}

const Estilos = StyleSheet.create({
    ConteinerDestaques: {
        flex: 1/1.5
    }
})