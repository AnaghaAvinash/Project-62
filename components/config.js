import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYwRn0JJOfuVBTbhDR8w3p2Osr59NENJs",
  authDomain: "project-60-c11bd.firebaseapp.com",
  databaseURL: "https://project-60-c11bd-default-rtdb.firebaseio.com",
  projectId: "project-60-c11bd",
  storageBucket: "project-60-c11bd.appspot.com",
  messagingSenderId: "913469026002",
  appId: "1:913469026002:web:5538bf12f069940810470b",
  measurementId: "G-PRQDKDX0SX"
};

  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();