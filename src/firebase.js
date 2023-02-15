// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDBarPhu9MiqVBdpsNF1c9aBA3gw1e247A",
  authDomain: "interview-project-d87e0.firebaseapp.com",
  projectId: "interview-project-d87e0",
  storageBucket: "interview-project-d87e0.appspot.com",
  messagingSenderId: "465273563710",
  appId: "1:465273563710:web:85b712d454c9f99f0b3f6f"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()
