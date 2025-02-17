import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd_NMPygKYoPSG4ekdjslVg9Rr0PbUuDU",
  authDomain: "open-weather-ecbfb.firebaseapp.com",
  projectId: "open-weather-ecbfb",
  storageBucket: "open-weather-ecbfb.firebasestorage.app",
  messagingSenderId: "914777156474",
  appId: "1:914777156474:web:7ae17a42983c0e99f704c3"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();