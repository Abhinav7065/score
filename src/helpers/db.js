// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import {initializeApp} from 'firebase/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyA3x6TLvTonawhnFf0rUC_ypHbsvaOyFXY",
  authDomain: "calculator-ca002.firebaseapp.com",
  projectId: "calculator-ca002",
  storageBucket: "calculator-ca002.appspot.com",
  messagingSenderId: "189492851071",
  appId: "1:189492851071:web:3b11eca8d0c6f8a97a2a4a",
  measurementId: "G-3JEPDRJTHD"
};

const fire = firebase.initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

export default fire;

