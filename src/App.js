import './App.css'
import React from 'react'
import LandingPage from './Components/LandingPage/LandingPage'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { HashRouter as Router,Routes,Route } from 'react-router-dom' 
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
        <Route path='/frontend_intv/frontend_intv' exact element={<LandingPage />} />
        <Route path='/frontend_intv/signup' exact element={<Signup />} />
        <Route path='/frontend_intv/home' exact element={<Home />} />
        <Route path='/frontend_intv/userinfo' exact element={<UserInfo />} />
        <Route path='/frontend_intv/albuminfo' exact element={<AlbumInfo />} />
        <Route path='/frontend_intv/photoinfo' exact element={<PhotoInfo />} />
      </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
