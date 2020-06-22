import firebase from 'firebase/app'
import 'firebase/firestore'


  const firebaseConfig = {
    apiKey: "AIzaSyBmWRe8l-WIqc_LVJxT8Ql4cMJ3F1jpq7o",
    authDomain: "burguer-queen-860ac.firebaseapp.com",
    databaseURL: "https://burguer-queen-860ac.firebaseio.com",
    projectId: "burguer-queen-860ac",
    storageBucket: "burguer-queen-860ac.appspot.com",
    messagingSenderId: "144178899611",
    appId: "1:144178899611:web:9ac8bfa9c3f027ba26b43e",
    measurementId: "G-EWZG0MLS2D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export {firebase}