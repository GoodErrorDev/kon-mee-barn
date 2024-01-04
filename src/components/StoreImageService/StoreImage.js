
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBCuJ_4hBIc8GG0laALTiBfuY5VJkqYd7Y",
  authDomain: "kon-mee-barn.firebaseapp.com",
  projectId: "kon-mee-barn",
  storageBucket: "kon-mee-barn.appspot.com",
  messagingSenderId: "1054970954771",
  appId: "1:1054970954771:web:57692beb92266d286febe6",
  measurementId: "G-6HT886K3BQ"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = getStorage(app);

export { storage };