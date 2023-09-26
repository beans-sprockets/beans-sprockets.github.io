// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQSGHsj8bppVipu7NWMkq3ZyNrttIqpng",
    authDomain: "competitions-fyi.firebaseapp.com",
    projectId: "competitions-fyi",
    storageBucket: "competitions-fyi.appspot.com",
    messagingSenderId: "419014059720",
    appId: "1:419014059720:web:b2f7f045274e5928c8e7fd",
    measurementId: "G-ZSJKZS0FM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
