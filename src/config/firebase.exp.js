import  firebase from "firebase"
import 'firebase/storage';

//coletar estas informações no firebase
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database