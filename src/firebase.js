import firebase from 'firebase/compat/app'

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC2WqPm9i6TBIUwqXte3vJFxxJHEY6FtvQ",
    authDomain: "netflix-clone-69bea.firebaseapp.com",
    projectId: "netflix-clone-69bea",
    storageBucket: "netflix-clone-69bea.appspot.com",
    messagingSenderId: "901914130146",
    appId: "1:901914130146:web:ebe2180a89eff51fbc50bb"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;