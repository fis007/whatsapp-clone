import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWKTRcqIbrn8ZClgvIBnd8l_JKdvjKI5I",
  authDomain: "whatsapp-clone-e38a2.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-e38a2.firebaseio.com",
  projectId: "whatsapp-clone-e38a2",
  storageBucket: "whatsapp-clone-e38a2.appspot.com",
  messagingSenderId: "144755343105",
  appId: "1:144755343105:web:73224fcbd6a6e3dd8ca500",
  measurementId: "G-91HT5Y7FQ7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
