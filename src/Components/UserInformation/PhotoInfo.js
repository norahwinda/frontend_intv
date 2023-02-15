import React from 'react'
import './PhotoInfo.css'
import { useSelector } from 'react-redux'

function PhotoInfo () {
  const photoId = useSelector((state) => state.userId.albumId)
  const [photoInfo, setPhotInfo] = React.useState({})
  const [inputTitle, setInputTitle] = React.useState('')

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
      .then(response => response.json())
      .then(json => setPhotInfo(json))
  }, [photoId])

  const handleClick = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`, {
      mathod: 'PATCH',
      body: JSON.stringify({
        title: `${inputTitle}`
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => setPhotInfo(json))
    alert('Edit succesfull')
  }
  return (
    <div className='photo-info'>
      <img src={photoInfo.url} alt=''/>
      <h3>Title: {photoInfo.title}</h3>
      <h3>Id: {photoInfo.id}</h3>
      <input 
        type='text' 
        placeholder='Enter title to edit'
        value={inputTitle}
        name='inputTitle'
        onChange={(e) => setInputTitle(e.target.value)}
      />
        <button onClick={handleClick}>Edit Image</button>
    </div>
  )
}

export default PhotoInfo
