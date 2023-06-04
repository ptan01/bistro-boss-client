import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase";
import axios from "axios";


export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const googleLogin =()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (name, photo) => {
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const loginUser = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const logOut = () => {
        setLoading(true)
        localStorage.removeItem('access-token')
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            
            // get and set jwt token 
           if(currentUser){
            axios.post('https://bistro-boss-server-khaki.vercel.app/jwt', {email: currentUser.email})
            .then(data => {
                // console.log(data.data.token)
                localStorage.setItem('access-token', data.data.token)
                setLoading(false) 
            })
           }
           else{
            localStorage.removeItem('access-token')
           }

          

        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        googleLogin,
        updateUserProfile

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;