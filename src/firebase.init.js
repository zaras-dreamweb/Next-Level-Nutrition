// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRVdGYmzhb1gA8Amad3yx2HcfbaUJoKcY",
    authDomain: "next-level-nutrition-2028a.firebaseapp.com",
    projectId: "next-level-nutrition-2028a",
    storageBucket: "next-level-nutrition-2028a.appspot.com",
    messagingSenderId: "400323263445",
    appId: "1:400323263445:web:ba6b15dadf23d52c9d9b5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;