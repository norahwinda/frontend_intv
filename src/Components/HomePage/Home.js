import React from 'react'
import './Home.css'
import HomeCard from './HomeCard'

function Home () {
  const [users, setUsers] = React.useState([])
  const [albums, setAlbums] = React.useState([])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(json => setUsers(json))
  }, [])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then(json => { setAlbums(json) })
  }, [])
  return (
    <div className='home'>
      <div className='home-top'>
        <h3 className='home-top1'>Users</h3>
        <h3 className='home-top2'>Number of Albums</h3>
      </div>
      {
        users.map((user) => {
          let numAlbum = 0
          albums.map((album) => {
            const isEqual = album.userId === user.id
            if (isEqual) {
              numAlbum = numAlbum + 1
            }
            return numAlbum
          })             
          return (
            <HomeCard
                key={user.id}
                user={user.name}
                numberOfAlbum={numAlbum}
                id={user.id}
            />
          )
        })
      }
    </div>
  )
}

export default Home
