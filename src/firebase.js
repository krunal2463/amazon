import firebase from "firebase";
import 'firebase/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAlW_ffGPDfJE_i4AArR8UUCSDhMnbNXc",
    authDomain: "clone-e47bf.firebaseapp.com",
    projectId: "clone-e47bf",
    storageBucket: "clone-e47bf.appspot.com",
    messagingSenderId: "677805348039",
    appId: "1:677805348039:web:9ad4b095ccf50d69539ae2",
    measurementId: "G-V912PC8WLC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };

