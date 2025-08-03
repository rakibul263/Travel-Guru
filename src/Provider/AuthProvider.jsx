import React, { createContext, useState } from "react";
import app from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile, GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new  GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update User
  const updateUser = (updateUser) => {
    return updateProfile(auth.currentUser, updateUser);
  }

  // Google Login
  const googleSignUp = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const authData = {
    createUser,
    updateUser,
    googleSignUp,
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
