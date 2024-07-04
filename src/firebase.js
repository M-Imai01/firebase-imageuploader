// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3qDXaqUYYrdA4bLG2c1Dl7AZzhBN7Dh4",
  authDomain: "react-image-uploader-2dfd1.firebaseapp.com",
  projectId: "react-image-uploader-2dfd1",
  storageBucket: "react-image-uploader-2dfd1.appspot.com",
  messagingSenderId: "819587703612",
  appId: "1:819587703612:web:1a9a48931d82c36fc07439"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
