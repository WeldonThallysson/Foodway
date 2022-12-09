import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyCYcOZL8ny8vggneRiZBuGCs2i0AvWsDno",
    authDomain: "foodway-6d5f7.firebaseapp.com",
    projectId: "foodway-6d5f7",
    storageBucket: "foodway-6d5f7.appspot.com",
    messagingSenderId: "650720205577",
    appId: "1:650720205577:web:d25c175eb4a09ed251d1d8",
    measurementId: "G-XK9N6LTY8T"
  };

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app,{
   persistence: getReactNativePersistence(AsyncStorage)
})

export {auth}