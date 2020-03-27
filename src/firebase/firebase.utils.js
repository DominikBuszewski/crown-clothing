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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
