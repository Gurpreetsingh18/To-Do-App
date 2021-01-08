import firebase from 'firebase';
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyB9ZUV5S_mPDwxUppgnfYJiFHbPLTSMUq4",
    authDomain: "to-do-8f9a3.firebaseapp.com",
    databaseURL: "https://to-do-8f9a3.firebaseio.com",
    projectId: "to-do-8f9a3",
    storageBucket: "to-do-8f9a3.appspot.com",
    messagingSenderId: "687341232281",
    appId: "1:687341232281:web:deacc0e4f79c05df58d808"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.database();

