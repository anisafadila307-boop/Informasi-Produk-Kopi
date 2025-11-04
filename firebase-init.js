// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsbxChjoGY8cG9Q1vi3TXnxieEZhcZSnk",
  authDomain: "informasi-produk-kopi.firebaseapp.com",
  databaseURL: "https://informasi-produk-kopi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "informasi-produk-kopi",
  storageBucket: "informasi-produk-kopi.firebasestorage.app",
  messagingSenderId: "271302726555",
  appId: "1:271302726555:web:40ddd17efd531ea200873e",
  measurementId: "G-DX0WGCS06V"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
