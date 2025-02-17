import React from "react";
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth } from "../lib/firebase";
import { FaGoogle, FaGithub, FaCloudSun } from "react-icons/fa";

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      onLogin();

      //set googleLogged in localStorage
      localStorage.setItem("googleLogged", "true");
      
    } catch (error) {
      console.error("Error al iniciar sesión con Google", error);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      await signInWithPopup(auth, new GithubAuthProvider());
      onLogin();
    } catch (error) {
      console.error("Error al iniciar sesión con GitHub", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-10 backdrop-blur-md">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-[400px] text-center border border-blue-200">
        <FaCloudSun data-testid="login-icon" className="mx-auto mb-4 text-6xl text-blue-800 animate-pulse" />
        <h2 className="mb-6 text-3xl font-bold text-blue-700">Weather App</h2>
        <p className="mb-6 text-lg text-gray-600">Inicia sesión para continuar</p>
        
        <div className="flex flex-col gap-4">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full py-3 text-lg font-semibold text-white transition-all duration-300 bg-blue-500 shadow-md hover:bg-blue-600 rounded-2xl hover:shadow-lg"
          >
            <FaGoogle className="mr-3 text-2xl" /> Iniciar con Google
          </button>

          <button
            onClick={handleGithubSignIn}
            className="flex items-center justify-center w-full py-3 text-lg font-semibold text-white transition-all duration-300 bg-gray-900 shadow-md hover:bg-gray-700 rounded-2xl hover:shadow-lg"
          >
            <FaGithub className="mr-3 text-2xl" /> Iniciar con GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;