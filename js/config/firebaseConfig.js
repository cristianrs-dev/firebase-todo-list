import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyDZfgyulyET6IqiC7yIWK79X3fKu-g_HX4",
    authDomain: "todo-list-52d3e.firebaseapp.com",
    projectId: "todo-list-52d3e",
    storageBucket: "todo-list-52d3e.firebasestorage.app",
    messagingSenderId: "470227550432",
    appId: "1:470227550432:web:2cbfce1b8e9193495a9085",
    measurementId: "G-M3RD99L4ZG"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}