import { Button } from '@mui/material'
import React from 'react'
import {auth} from '../firebase.js'
import firebase from 'firebase/compat'
function SignIn() {
    const signInWithGoogle=(()=>{
        const provider=new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    })
  return <> 
    
    <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </>
}

export default SignIn
