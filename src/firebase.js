import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAIKCQU_mL7BmXj8tX6pa5nFhX1zW73jnc",
    authDomain: "insta-clone-c17ad.firebaseapp.com",
    projectId: "insta-clone-c17ad",
    storageBucket: "insta-clone-c17ad.appspot.com",
    messagingSenderId: "393351863921",
    appId: "1:393351863921:web:8248ebca26bd8402c145d0",
    measurementId: "G-YQQGTCNE01"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export {db,auth,storage};