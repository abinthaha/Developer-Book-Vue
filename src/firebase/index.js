
import { initializeApp } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC99ZQzmzxjAk8Qa3lWHw0ge_fgX17QKIY",
    authDomain: "developer-book.firebaseapp.com",
    databaseURL: "https://developer-book.firebaseio.com",
    projectId: "developer-book",
    storageBucket: "developer-book.appspot.com",
    messagingSenderId: "786397186652",
    appId: "1:786397186652:web:a11dca15242f51292eb499",
    measurementId: "G-SLFLZRNVM5"
};

const app = initializeApp(firebaseConfig)

export const db = app.firestore();
export const userRef = db.collection('user_details');
export const postsRef = db.collection('posts');

// export default db;