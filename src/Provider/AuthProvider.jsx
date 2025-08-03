import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new  GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // setLoading(false);
    });
    return ()=> {
      unsubscribe();
    }
  }, [])

  // register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update User
  const updateUser = (updateUser) => {
    // setLoading(true);
    return updateProfile(auth.currentUser, updateUser);
  }

  // Google Login
  const googleSignUp = () => {
    // setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  // login
  const loginUser = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logoutUser = () => {
    return signOut(auth);
  };

  const authData = {
    createUser,
    updateUser,
    googleSignUp,
    loginUser,
    logoutUser,
    // loading,
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
