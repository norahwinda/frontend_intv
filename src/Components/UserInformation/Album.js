import React from 'react'
import './Album.css'
import { useDispatch } from 'react-redux'
import { assignAlbumId, resetAlbumId } from '../../app/features/counter/counterSlice'
import { useNavigate } from 'react-router-dom'

function Album ({ id, title }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(resetAlbumId)
    dispatch(assignAlbumId(id))
    navigate('/albuminfo')
  }
  return (
    <div className='album' onClick={handleClick}>
      <p>Album Id: {id}</p>
      <p>Title: {title}</p>
    </div>
  )
}

export default Album
