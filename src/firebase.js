import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAIKzUNQZoqqyN7MLDZx-ZJkccOhFFi4LY',
  authDomain: 'think-piece-73dd3.firebaseapp.com',
  databaseURL: 'https://think-piece-73dd3.firebaseio.com',
  projectId: 'think-piece-73dd3',
  storageBucket: 'think-piece-73dd3.appspot.com',
  messagingSenderId: '24624241390',
  appId: '1:24624241390:web:6f7356de63c369e1a771ff',
  measurementId: 'G-0N4TLDL5JK',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const firestore = firebase.firestore();

// ! Remove from production
window.firebase = firebase;

export default firebase;