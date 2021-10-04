import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDuNsTu11tIGVtUcIdQB_-xv1mx550E1g",
    authDomain: "phanit-firegram.firebaseapp.com",
    projectId: "phanit-firegram",
    storageBucket: "phanit-firegram.appspot.com",
    messagingSenderId: "236762837258",
    appId: "1:236762837258:web:ca065c8563ceb671ac0af3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export {projectStorage, projectFirestore, timestamp};