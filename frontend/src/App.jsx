import React from 'react'
import { Routes, Route } from 'react-router'

//This is the page that I imported from the pages folder
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyAppoinment from './pages/MyAppoinments'
import MyProfile from './pages/MyProfile'
import Appoinment from './pages/Appoinment'
import Navber from './Component/Navber'
import Footer from './Component/Footer'



const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Navber />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctor />} />
        <Route path='/doctors/:speciality' element={<Doctor />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-Appoinment' element={<MyAppoinment />} />
        <Route path='/my-Profile' element={<MyProfile />} />
        <Route path='/appoinment/:docId' element={<Appoinment />} />

      </Routes>

    <Footer/>
    </div>
  )
}

export default App