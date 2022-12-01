import * as Animatable from 'react-native-animatable' 
import React,{useState,useEffect} from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import Cabecalho from '../../components/Header/cabecalho';
import Categorias from '../../components/Categories/Categorias';
import Destaques from '../../components/Destaques/Destaques';
export default function Index() {
 return (
   <View style={{flex: 1,backgroundColor: 'white'}}>
     <Cabecalho/>
     <Categorias/>
     <Destaques/>
    </View>
  );
}