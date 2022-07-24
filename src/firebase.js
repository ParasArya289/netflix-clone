// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD7yG0sxc0gz-oSNBlsc-9ayFbWeQh2l4Q",
  authDomain: "netflix-clone-81ce9.firebaseapp.com",
  projectId: "netflix-clone-81ce9",
  storageBucket: "netflix-clone-81ce9.appspot.com",
  messagingSenderId: "93332662963",
  appId: "1:93332662963:web:98b67438970555ce325ec6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;