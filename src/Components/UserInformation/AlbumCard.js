import React from 'react'
import './AlbumCard.css'
import { useDispatch } from 'react-redux'
import { assignAlbumId, resetAlbumId } from '../../app/features/counter/counterSlice'
import { useNavigate } from 'react-router-dom'

function AlbumCard ({ image, id }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(resetAlbumId())
    dispatch(assignAlbumId(id))
    navigate('/frontend_intv/photoinfo')
  }
  return (
    <div className='albumcard' onClick={handleClick}>
      <img src={image} alt='' />
    </div>
  )
}

export default AlbumCard
