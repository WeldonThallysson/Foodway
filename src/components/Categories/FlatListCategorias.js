import React from 'react';
import { View,Text,Image, StyleSheet, TouchableOpacity} from 'react-native';


export default function FlatListCategorias(props) {
 return (
   <View style={[Estilos.ConteinerImg,{paddingTop: props.data.paddingTop}]}>
       <TouchableOpacity onPress={() => {}}>     
          <Image source={{uri: props.data.img}} style={{width: props.data.width, height: props.data.height,paddingTop: props.data.paddingTop}}/>
       </TouchableOpacity>
    </View>
  );
}


const Estilos = StyleSheet.create({
    ConteinerImg: {  
        marginTop: 10,
        padding: 16,
       
    },
    categoriasimgs: {
        width: 70, height: 70
    },
  
})