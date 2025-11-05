// firebase-init.js
// Firebase modular SDK v12.5.0 — kompatibel GitHub & Netlify

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// ================================
// Konfigurasi Firebase (Project Kopi)
// ================================
const firebaseConfig = {
  apiKey: "AIzaSyCy0PaIMJ8SkEsIPRaCSekBdihWsBUYHjo",
  authDomain: "project-kopi-d1dc2.firebaseapp.com",
  databaseURL: "https://project-kopi-d1dc2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-kopi-d1dc2",
  storageBucket: "project-kopi-d1dc2.firebasestorage.app",
  messagingSenderId: "427577087573",
  appId: "1:427577087573:web:bd7961cb777086476ca6dc"
};

// ================================
// Inisialisasi Firebase
// ================================
const app = initializeApp(firebaseConfig);

// ================================
// Layanan Firebase
// ================================
const db = getDatabase(app);     // Realtime Database
const storage = getStorage(app); // Storage (gambar)
const auth = getAuth(app);       // Authentication

// ================================
// Ekspor
// ================================
export { app, db, storage, auth };
