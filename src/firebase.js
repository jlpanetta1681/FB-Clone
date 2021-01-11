import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAFfajXs3vBw-mmFVvqUPuS0RaW9Fi3OXw",
    authDomain: "fbclone-3cbff.firebaseapp.com",
    projectId: "fbclone-3cbff",
    storageBucket: "fbclone-3cbff.appspot.com",
    messagingSenderId: "152739657631",
    appId: "1:152739657631:web:295c37981214f7675fefaa",
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;