
import firebase from "firebase/compat";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBIaQeq-4MLiliAJj8YQ2WFHdMrvxhmJ4k",
    authDomain: "chat-app-dummy.firebaseapp.com",
    projectId: "chat-app-dummy",
    storageBucket: "chat-app-dummy.appspot.com",
    messagingSenderId: "22677239474",
    appId: "1:22677239474:web:2089dcd49fc3a2b0d83bab",
    measurementId: "G-Z5E2NWZJRN"
})

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth}