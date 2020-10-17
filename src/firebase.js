import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmWmFvBFspReatR9HNQSRsco9tSWcQvvc",
  authDomain: "react-clone-discord.firebaseapp.com",
  databaseURL: "https://react-clone-discord.firebaseio.com",
  projectId: "react-clone-discord",
  storageBucket: "react-clone-discord.appspot.com",
  messagingSenderId: "809630687948",
  appId: "1:809630687948:web:0dcd23ee8ef947b4a35869",
  measurementId: "G-5QRZ77TJSS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;
