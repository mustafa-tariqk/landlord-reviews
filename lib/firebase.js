import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDXAph-EU0jbA7gocRsKYmojICZUpyzFA0",
    authDomain: "landlord-reviews-1db4c.firebaseapp.com",
    projectId: "landlord-reviews-1db4c",
    storageBucket: "landlord-reviews-1db4c.appspot.com",
    messagingSenderId: "1031951942330",
    appId: "1:1031951942330:web:067a57ccfe8de6b8bdf883",
    measurementId: "G-B0FEHEJSW2"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();