import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const provider = new GoogleAuthProvider();
// creating user
const createUser =(email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}
// sign in or login
 const signIn = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
 }
//  updateUseProfile
   const updateUseProfile =(name, photo) =>{
   return updateProfile(auth.currentUser,{
        displayName: name, photoURL: photo
    })
   }
//    google 

 const googleSign = () =>{
    setLoading(true);
    return signInWithPopup(auth, provider)
 }

// log Out
 const logOut =  () =>{
    setLoading(true);
    return signOut(auth);
 }

//    onAuthState
useEffect(() =>{
 const unsubscribe =   onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
    
        setLoading(false)
    });
    return () =>{
        return unsubscribe();
    }
},[])
     
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSign,
        updateUseProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
           { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;