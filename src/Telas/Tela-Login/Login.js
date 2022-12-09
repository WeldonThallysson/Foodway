import React,{useEffect,useState} from 'react';
import * as Animatable from 'react-native-animatable';
import { View,Text,TextInput,TouchableOpacity,StyleSheet,Image,StatusBar} from 'react-native';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({navigation}) {
    
     const [email,setEmail] = useState('')
     const [senha,setSenha] = useState('')

   
    function logar(){
      signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {

         navigation.navigate('tab')           // ...
      })
      .catch((error) => {
         alert('cadastre se para acessar')
      });
    }
   
 return (
   <View style={Estilos.conteinerPrincipal}>
    <StatusBar backgroundColor={'#F79824'}/>
  
     <Image source={require('../../imgs/Up.png')} style={Estilos.logo}/>
    
    <View style={Estilos.conteinerInputs}>     
     <TextInput 
      value={email}
      placeholder='Email'
      placeholderTextColor={'#7E1F2A'}
      onChangeText={(email) => setEmail(email)}
      style={Estilos.inputs} 
    />
     <TextInput 
      value={senha}
      placeholder='Senha'
      placeholderTextColor={'#7E1F2A'}
      onChangeText={(senha) => setSenha(senha)}
      style={Estilos.inputs} 
    />
   </View> 

    <TouchableOpacity style={Estilos.botao} onPress={() => { logar()}}>
      <Text style={Estilos.textBotao}>Acessar</Text>  
    </TouchableOpacity>    
    <TouchableOpacity style={Estilos.botaoCadastrese} onPress={() => {navigation.navigate('cadaster')}}>
      <Text style={Estilos.textBotaoCadastrese}>Ainda não tem uma conta? Cadastre-Se</Text>  
    </TouchableOpacity>
   </View>
  );
}


const Estilos = StyleSheet.create({
    
    conteinerPrincipal:{
      flex: 1, alignItems: 'center',
      marginTop: '0%',backgroundColor: '#F79824'
    },
    logo:{
      width: '50%',
      height: '20%',
      marginTop: '30%'
    } , 
    conteinerInputs:{
      padding: 1, 
    },
    inputs:{
      color: '#7E1F2A',
      width:  250,
      padding: 5,
      margin: 10,
      borderBottomWidth: 1.5,
      borderRadius: 3,
      borderColor: '#7E1F2A', 
    } ,
    botao:{
      marginTop: '5%',
      width: '50%',
      height: '6.5%',
      backgroundColor: '#7E1F2A',
      borderRadius: 5,
      borderWidth: 0.2,
      borderColor: '#FFA343'

    },

    textBotao:{
      textAlign: 'center',
      padding: 10,
      fontSize: 15,
      fontWeight: 'bold',
      color: '#FFA343'
      
    },
    botaoCadastrese:{
      marginTop: '5%',
      width: '60%',
      height: '6.5%',
      borderColor: '#FFA343'
    },
    textBotaoCadastrese: {
        padding: 2,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'

    }


})