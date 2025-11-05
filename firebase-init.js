// firebase-init.js
// Firebase modular SDK v12.5.0 — kompatibel GitHub & Netlify

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-storage.js";

// ================================
// Konfigurasi Firebase
// ================================
const firebaseConfig = {
  apiKey: "AIzaSyCsT69zgTNJKYw9txNsaXYRMFnWz8BOtBo",
  authDomain: "new-new-aekiweb.firebaseapp.com",
  projectId: "new-new-aekiweb",
  storageBucket: "new-new-aekiweb.appspot.com",
  messagingSenderId: "726151356673",
  appId: "1:726151356673:web:9d23c689b2b250119b3b00",
  measurementId: "G-MX3N5HL1Q3",
  databaseURL: "https://new-new-aekiweb-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// ================================
// Inisialisasi Firebase
// ================================
const app = initializeApp(firebaseConfig);

// ================================
// Layanan Firebase
// ================================
const db = getDatabase(app);       // Realtime Database
const storage = getStorage(app);   // Storage untuk gambar

// ================================
// Ekspor
// ================================
export { app, db, storage };
