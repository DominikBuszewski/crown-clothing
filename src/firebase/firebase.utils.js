import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCIfL_-Un1vLDSuTv6t-wY8cyK1YB0nZ4M",
  authDomain: "crown-db-6d14f.firebaseapp.com",
  databaseURL: "https://crown-db-6d14f.firebaseio.com",
  projectId: "crown-db-6d14f",
  storageBucket: "crown-db-6d14f.appspot.com",
  messagingSenderId: "945498749539",
  appId: "1:945498749539:web:613d59559a84e5c3b75656"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
