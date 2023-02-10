import {getFirestore, collection} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBj6FfVCr1_MmUhynTxR4yMnrLDQ7-aJOk",
  authDomain: "gaiagames.firebaseapp.com",
  projectId: "gaiagames",
  storageBucket: "gaiagames.appspot.com",
  messagingSenderId: "1055852750480",
  appId: "1:1055852750480:web:b09cf195cbd3721a741a15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const productsCollection = collection(db, "products")