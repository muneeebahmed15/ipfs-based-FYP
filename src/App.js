import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Mission from './Components/Mission/Mission'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Screens/LandingPage'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'
import PatientHealth from './Components/PatientHealth'
import Patientform from './Components/Patientform'

const App = () => {
  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/mission' element={<Mission/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>


    <Route path='/patienthealth/:id' element={<PatientHealth/>}/>

    <Route path='/patientform' element={<Patientform/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
