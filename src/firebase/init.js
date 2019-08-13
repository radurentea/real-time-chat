import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyBWzQCS69N6TI-6jS98n3dT2e6x0Xlb71g",
    authDomain: "ninja-chat-b49bd.firebaseapp.com",
    databaseURL: "https://ninja-chat-b49bd.firebaseio.com",
    projectId: "ninja-chat-b49bd",
    storageBucket: "ninja-chat-b49bd.appspot.com",
    messagingSenderId: "691396680814",
    appId: "1:691396680814:web:55c70275dd741b58"
  };
  
  const firebaseApp =   firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()
