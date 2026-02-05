import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBmJavNW_2qlqOeXqfgpQOoPc2ZmNabWRg",
  authDomain: "bingo-gratis-d4311.firebaseapp.com",
  projectId: "bingo-gratis-d4311",
  storageBucket: "bingo-gratis-d4311.firebasestorage.app",
  messagingSenderId: "692749406919",
  appId: "1:692749406919:web:31026737569c9cbba024e2"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
