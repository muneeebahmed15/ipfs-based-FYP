import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Mission from './Components/Mission/Mission'
import {  Route, Routes } from 'react-router-dom'
import LandingPage from './Screens/LandingPage'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'
import PageNotFound from './Components/404Page/PageNotFound'
import PatientRecord from './Screens/PatientRecord'
import PatientLogin from './Components/Admin/PatientLogin'

const App = () => {
  return (
    <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/mission' element={<Mission/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/login-as-doctor' element={<Login/>}/>


    <Route path='/patient-record' element={<PatientRecord/>}/>


    {/* admin */}
    <Route path='/patientlogin' element={<PatientLogin/>}/>

    {/* <Route path='/patienthealth' element={<PatientHealth/>}/>
    <Route path='/patientform' element={<Patientform/>}/> */}


    <Route path='*' element={<PageNotFound/>}/>

  </Routes>
  <Footer/>
    </>
  )
}

export default App
