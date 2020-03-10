import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCG6pfAd5IF1zBn-VmUJmyoFopiDQmovZw",
  authDomain: "clothes-udemy.firebaseapp.com",
  databaseURL: "https://clothes-udemy.firebaseio.com",
  projectId: "clothes-udemy",
  storageBucket: "clothes-udemy.appspot.com",
  messagingSenderId: "1070430377376",
  appId: "1:1070430377376:web:2b9476d7bb4f12f44cc0c5",
  measurementId: "G-GV0E9Z5J8N"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Config pop up google sign in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
