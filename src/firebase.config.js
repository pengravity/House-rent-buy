import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBpo3tMh2Ylrg7wL98hfBcROwwuvZHnN0w',
  authDomain: 'house-rent-buy-23f8e.firebaseapp.com',
  projectId: 'house-rent-buy-23f8e',
  storageBucket: 'house-rent-buy-23f8e.appspot.com',
  messagingSenderId: '1029167873011',
  appId: '1:1029167873011:web:f9bd9ec4c528684bd4f086',
  measurementId: 'G-KFVSGB1PSG',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
