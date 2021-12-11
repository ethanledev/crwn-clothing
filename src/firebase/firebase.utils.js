import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAO5PTxDm-3RLBOBRhq5l9zPIKcXTnao8g",
  authDomain: "crwn-clothing-db-d819d.firebaseapp.com",
  projectId: "crwn-clothing-db-d819d",
  storageBucket: "crwn-clothing-db-d819d.appspot.com",
  messagingSenderId: "768136602418",
  appId: "1:768136602418:web:f4570fdcba5203e4916d2b",
  measurementId: "${config.measurementId}",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
