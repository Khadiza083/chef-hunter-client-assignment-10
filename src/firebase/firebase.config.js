// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk0mZyD638-DE3nB-KjhkPPjiy_kzR21c",
  authDomain: "chef-recipe-hunter-auth-15c8f.firebaseapp.com",
  projectId: "chef-recipe-hunter-auth-15c8f",
  storageBucket: "chef-recipe-hunter-auth-15c8f.appspot.com",
  messagingSenderId: "786707984217",
  appId: "1:786707984217:web:c29e308762895ae8a86648"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;