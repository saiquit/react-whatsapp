import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuoQzaga7y6HqIeHWDsUghi2J8BgKXQUg",
  authDomain: "chat-4c6a7.firebaseapp.com",
  databaseURL: "https://chat-4c6a7.firebaseio.com",
  projectId: "chat-4c6a7",
  storageBucket: "chat-4c6a7.appspot.com",
  messagingSenderId: "771228191181",
  appId: "1:771228191181:web:96ad0c44e13abfe713dc84",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
