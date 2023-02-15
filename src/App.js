import './App.css'
import React from 'react'
import LandingPage from './Components/LandingPage/LandingPage'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom' 
import Signup from './Components/Authentication/Signup'
import { auth } from './firebase'
import Home from './Components/HomePage/Home'
import UserInfo from './Components/UserInformation/UserInfo'
import AlbumInfo from './Components/UserInformation/AlbumInfo'
import PhotoInfo from './Components/UserInformation/PhotoInfo'

function App () {
  const [user, setUser] = React.useState('')
  React.useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
    })
  }, [user])
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/userinfo' element={<UserInfo />} />
        <Route path='/albuminfo' element={<AlbumInfo />} />
        <Route path='/photoinfo' element={<PhotoInfo />} />
      </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
