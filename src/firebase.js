import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // Get a reference to the place in the database where a user profile might be
  const userRef = firestore.doc(`/users/${user.uid}`);

  // Go and fetch the document from that location
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;

  try {
    return await firestore.collection('users').doc(uid);
  } catch (error) {
    console.error('Error fetching user', error.message);
  }
};

// ! Remove from production
window.firebase = firebase;

export default firebase;
