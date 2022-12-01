import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Index from './src/Telas/Home/Home';
import Usuarios from './src/Telas/User/usuarios';
import Carrinho from './src/Telas/Cart/Carrinho';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator()

export default function TabBar(){

    return(
       
             <Tab.Navigator initialRouteName='Inicio' screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: "orange",
                    padding: 2, 
                    
                       
                },
                tabBarLabelStyle: {
                   fontSize: 12,
                   fontWeight: 'bold'     
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: '#424242',
               


               
                
           
              
             
             }}>
                <Tab.Screen options={{
                headerShown: false, 
                tabBarIcon:(color,size) => {
                    return <FontAwesome name={'shopping-cart'} color={color} size={30} />

             }}} name='Carrinho' component={Carrinho}/>


                <Tab.Screen options={{
                headerShown: false, 
                tabBarIcon:(color) => {
                    return <FontAwesome name={'home'} color={color} size={30} />

             }}} name='Inicio' component={Index}/>



                 <Tab.Screen options={{
                headerShown: false, 
                tabBarIcon:(color) => {
                    return <FontAwesome name={'user-circle-o'} color={color} size={30} />

             }}} name='Usuarios' component={Usuarios}/>


             </Tab.Navigator>              

  

    )
}