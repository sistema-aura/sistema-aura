// Import das funções Firebase
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";

// Configuração do teu projeto Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyAeNo2vAV7htCcuASPYAyPal72ABGOeMhw",
  authDomain: "sistema-aura.firebaseapp.com",
  projectId: "sistema-aura",
  storageBucket: "sistema-aura.firebasestorage.app", // ✅ confere se é exatamente esse nome
  messagingSenderId: "872957048609",
  appId: "1:872957048609:web:f3035080060fd0f12b7060",
  measurementId: "G-DQ3NHXP409"
};

// Inicializa Firebase (só se ainda não existir app)
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export const storage = getStorage(app);