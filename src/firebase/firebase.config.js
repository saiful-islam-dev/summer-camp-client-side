// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyADOSauiWVfdQikvyQKMBYR2jBn_sgXyRI",
//   authDomain: "summer-camp-608a5.firebaseapp.com",
//   projectId: "summer-camp-608a5",
//   storageBucket: "summer-camp-608a5.appspot.com",
//   messagingSenderId: "759140020880",
//   appId: "1:759140020880:web:4d9522157eb730b7725e15"
// };

// console.log("fribase key", import.meta.env.VITE_apiKey);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);