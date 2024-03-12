import { signInWithEmailAndPassword, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const loginAPI = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Login failed:", error);
        throw error; // Rethrow the error to handle it at the caller level
    }
};

export const RegisterAPI = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Registration failed:", error);
        throw error; // Rethrow the error to handle it at the caller level
    }
};

export const GoogleSignAPI = async (email, password) => {
    try {
   const googleProvider=new GoogleAuthProvider()
   let  res=signInWithPopup(auth,googleProvider);
   return res;
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }
};
