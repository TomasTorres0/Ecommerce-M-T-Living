import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiT0tq2hcjGvabk08b4bqYMMGtB_k5zpw",
  authDomain: "tiendaonline-mtliving.firebaseapp.com",
  projectId: "tiendaonline-mtliving",
  storageBucket: "tiendaonline-mtliving.appspot.com",
  messagingSenderId: "692473864408",
  appId: "1:692473864408:web:4f94bf9fda4ebd7e7937ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();