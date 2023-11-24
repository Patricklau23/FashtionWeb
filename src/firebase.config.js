// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcIntrKxsKx72qcxINtmjDYVNbpP5KJ04",
  authDomain: "logoapp-cf6a6.firebaseapp.com",
  projectId: "logoapp-cf6a6",
  storageBucket: "logoapp-cf6a6.appspot.com",
  messagingSenderId: "348300368273",
  appId: "1:348300368273:web:57de7d24f7eeb8d34ee230",
  measurementId: "G-YGJYH6GG2X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
