// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUL6Yd6HB7YYwzrukZ4U0qAiYnPhyeooA",
    authDomain: "dr-talks.firebaseapp.com",
    projectId: "dr-talks",
    storageBucket: "dr-talks.appspot.com",
    messagingSenderId: "416151620415",
    appId: "1:416151620415:web:d7cfb345dd370332bde18a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;