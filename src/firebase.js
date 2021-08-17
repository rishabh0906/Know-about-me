import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";


var firebaseConfig ={
  apiKey: "AIzaSyAhVZltkKgfZlXIWek_2pr55enPa7YvUpE",
  authDomain: "portfolio-cb9a2.firebaseapp.com",
  projectId: "portfolio-cb9a2",
  storageBucket: "portfolio-cb9a2.appspot.com",
  messagingSenderId: "355213087102",
  appId: "1:355213087102:web:75bdcf90c71fb7e346e32f"
} ;
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
 export const firestore=firebase.firestore();
 export const storage=firebase.storage(firebase.app());
 export default firebase;