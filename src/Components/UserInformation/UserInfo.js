import React from 'react'
import './UserInfo.css'
import { useSelector } from 'react-redux'
import Album from './Album'

function UserInfo() {

  const idNum = useSelector((state) => state.userId.id)
  const [ users, setUsers ] = React.useState([])
  const [ userAlbums, setUserAlbum ] = React.useState([])
  const [ id ] = React.useState(idNum)

  React.useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(json => {setUsers(json)})
  }, [])

  React.useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
        .then(json => {setUserAlbum(json)})
  }, [])
  return (
    <div className='userinfo'>
      <h3>User Information</h3>
      <div className='user-info'>
      {
        users.map((user) => {
        return  user.id === id ? 
          <div className='user-ifoData' key={ user.id }>
            <p>id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Address: Street:{user.address.street}<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suite:{user.address.suite}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City:{user.address.city}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Zip-code:{user.address.zipcode}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lat:{user.address.geo.lat}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lng:{user.address.geo.lng}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company name: {user.company.name}</p>
            <p>CatchPhrase: {user.company.catchPhrase}</p>
            <p>BS: {user.company.bs}</p>
          </div> : ""
        })
      }
      </div>
      <h3 className='userinfo-albumh3'>User Album</h3>
      <div className='userinfo-album'>
      {
        userAlbums.map((userAlbum) =>{
          return userAlbum.userId === id ? 
          <Album key={userAlbum.id}
            id = {userAlbum.id}
            title={userAlbum.title}
          />: ""
        })
      }
      </div>
    </div>
  )
}

export default UserInfo
