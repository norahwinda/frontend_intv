import React, { useState } from 'react'
import './AlbumInfo.css'
import AlbumCard from './AlbumCard'
import { useSelector } from 'react-redux'

function AlbumInfo() {

    const [ albums, setAlbums] = useState([])
    const thisId = useSelector((state) => state.userId.id)

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => setAlbums(json))
    }, [])
  return (
    <div className='albuminfo'>
        {
            albums.map((album) => {
                return thisId === album.albumId ? 
                <AlbumCard
                key={album.id}
                image={album.url}
                id={album.id} />: ""
            })
        }
    </div>
  )
}

export default AlbumInfo
