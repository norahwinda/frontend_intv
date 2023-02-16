import { Avatar } from '@mui/material'
import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signOut, getAuth } from 'firebase/auth'

function Header () {
  const navigate = useNavigate()

  const user = auth.currentUser
  const lo = getAuth()

  const LogOut = () => {
    signOut(lo).then(() => {
      alert('Logged Out succesfully')
      navigate('/frontend_intv')
    }).catch(() => {
      alert('An error occured while logging out')
    })
  }

  const handleHomeClick = () => {
    navigate('/frontend_intv/home')
  }
  return (
    <div className='header'>
      <h3>Photography</h3>
      <div className='header-right'>
        {user
          ? <div className='headerright-signout'>
              <button onClick={handleHomeClick}>HOME</button>
              <button onClick={LogOut}>SIGN OUT</button>
              <Avatar src={user.photoURL} className='header-avatar' />
            </div>
          : <button onClick={() => navigate('/frontend_intv/signup')}>SIGN IN</button>}
      </div>
    </div>
  )
}

export default Header
