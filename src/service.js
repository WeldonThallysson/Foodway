import firebase from "firebase/app";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyArXZaOfYv21XrM7iJJHqlOI3sK5QuOJaM",
    authDomain: "novoapp-6c122.firebaseapp.com",
    projectId: "novoapp-6c122",
    storageBucket: "novoapp-6c122.appspot.com",
    messagingSenderId: "541920973",
    appId: "1:541920973:web:57f8a2f7845ef11d17a384",
    measurementId: "G-VZMM773CE6"
  };


  if(!firebase.app.length){
  firebase.initializeApp(firebaseConfig);
}

  export default firebase