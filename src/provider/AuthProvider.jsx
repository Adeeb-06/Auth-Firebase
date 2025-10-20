import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword , getAuth, onAuthStateChanged ,signInWithEmailAndPassword,signOut} from "firebase/auth";


export const AuthContext = createContext()

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)

    const createUser = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = async () => {
        setUser(null)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
        })
        return () => {
            unsubscribe()
        }
    },[])

    const authData = {
        createUser,
        setUser,
        user,
        logOut,
        logIn
    }

  return <AuthContext value={authData}>
    {children}
  </AuthContext>
}

export default AuthProvider