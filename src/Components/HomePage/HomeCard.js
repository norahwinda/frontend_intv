import React from 'react'
import './HomeCard.css'
import { useDispatch } from 'react-redux'
import { assignUserId, resetUserId } from '../../app/features/counter/counterSlice'
import { useNavigate } from 'react-router-dom'

function HomeCard ({ user, numberOfAlbum, id }) {
  const [userId, setUserId] = React.useState(id)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = () => {
    dispatch(resetUserId())
    dispatch(assignUserId(userId))
    navigate('/userinfo')
  }
  return (
    <div className='home-card' onClick={handleClick}>
      <p className='home-cardp1'>{user}</p>
      <p className='home-cardp2'>{numberOfAlbum}</p>
      <input 
          type='text'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}/>
    </div>
         ) 
}

export default HomeCard
