import { Avatar } from '@mui/material'
import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <h3>Photography</h3>
      <div className='header-right'>
      <button>SIGN UP</button>
      <button>LOG IN</button>
      <Avatar className='header-avatar' />
      </div>
    </div>
  )
}

export default Header
