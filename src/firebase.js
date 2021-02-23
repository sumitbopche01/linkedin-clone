import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5GMhA9K3QI9eg-5fM99ZEtCX_F1X_Zno",
    authDomain: "linkedin-clone-7e99b.firebaseapp.com",
    projectId: "linkedin-clone-7e99b",
    storageBucket: "linkedin-clone-7e99b.appspot.com",
    messagingSenderId: "788092243241",
    appId: "1:788092243241:web:63b33dd2654f25c7143b38",
    measurementId: "G-S28ZNBH07Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
