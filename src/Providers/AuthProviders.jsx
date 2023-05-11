/* eslint-disable no-unreachable */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProviders = ({children}) => {
    const auth = getAuth(app);
    // const [user, setUser] = useState(null)
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedInUser) =>{
            setUser(loggedInUser)
            setLoading(false)
        });
        return () =>{
            unsubscribe()
        }
    }, [])

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const popupSignIn = (Provider) =>{
        setLoading(true)
        return signInWithPopup(auth, Provider)
    }

    const authInfo = {
        user,
        createUser,
        signIn,
        popupSignIn,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;