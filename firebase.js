// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF9nMwpAkJddylnqPnIV2NX009LfL-y-c",
  authDomain: "insta-clone-466bb.firebaseapp.com",
  projectId: "insta-clone-466bb",
  storageBucket: "insta-clone-466bb.appspot.com",
  messagingSenderId: "38177926044",
  appId: "1:38177926044:web:43b6e73a3dc745af9af659"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };