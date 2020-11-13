import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPzSYh_OPSE8ToSGRVPgYIx_Xz6UuLdFE",
  authDomain: "twitter-by-mukund-chamariya.firebaseapp.com",
  databaseURL: "https://twitter-by-mukund-chamariya.firebaseio.com",
  projectId: "twitter-by-mukund-chamariya",
  storageBucket: "twitter-by-mukund-chamariya.appspot.com",
  messagingSenderId: "892516457385",
  appId: "1:892516457385:web:1faceb9f2550546c9442b8",
  measurementId: "G-VBQXMEWNRS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
