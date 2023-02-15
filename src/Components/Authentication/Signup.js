import React from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../../firebase'
import { signInWithPopup } from 'firebase/auth'

function Signup () {
  const navigate = useNavigate()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result)
      navigate('/frontend_intv')
    }).catch(() => {
      alert('Unable to Sign up')
    })
  }
  return (
    <div className='signup'>
      <div className='signup-form'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/3/3e/Google_2011_logo.png' alt='' />
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  )
}

export default Signup
