import firebase from 'firebase/firebase-compat'
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyC_rwFWPLMfs9zkGdXHyzgOPimMJsM_9Mw",
  authDomain: "foursome4-b925c.firebaseapp.com",
  projectId: "foursome4-b925c",
  storageBucket: "foursome4-b925c.appspot.com",
  messagingSenderId: "395223353084",
  appId: "1:395223353084:web:75b91d996d8a9a94fdb979"
  };
  
// Initialize Firebase
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

 export default firebase;