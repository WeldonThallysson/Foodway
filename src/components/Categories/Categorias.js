import React,{useState,useEffect}from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import DadosCategorias from '../../Dados/DadosCategorias/DadosCategorias' 
import FlatListCategorias from './FlatListCategorias'

export default function Categorias(){
    return (
      <View style={Estilos.ConteinerCategorias}>
        <Text style={Estilos.TextoPrincipal}>Qual o Seu Desejo</Text>
        <FlatList
         data={DadosCategorias}   
         keyExtractor={item => item.id}
         horizontal
         renderItem={({item}) => <FlatListCategorias data={item}/> }
        />
      </View>
    )
}

const Estilos = StyleSheet.create({
    ConteinerCategorias: {
    flex: 1/4,

    },
    TextoPrincipal: {
        fontSize: 18,  
        color: 'black',
        paddingTop: 15,
        margin: 10,
        fontStyle: 'italic',
        width: '50%',
        borderBottomWidth: 3,
        borderBottomColor: 'orange',
        borderRadius: 7,
       }

})