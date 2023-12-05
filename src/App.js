import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import LandingPage from './Screens/LandingPage'
import Login from './Components/Login/Login'
import PageNotFound from './Components/404Page/PageNotFound'
import PatientRecord from './Screens/PatientRecord'
import PatientLogin from './Components/Admin/PatientLogin'
import AboutPage from './Screens/AboutPage'
import MissionPage from './Screens/MissionPage'
import ContactPage from './Screens/ContactPage'
import LoginPage from './Screens/LoginPage'
import Dashboard from './Screens/Admin/Dashboard'
import PatientInfo from './Screens/Admin/PatientInfo'

const App = () => {
  return (
    <>
  <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/mission' element={<MissionPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/login-as-doctor' element={<Login/>}/>


    <Route path='/patient-record' element={<PatientRecord/>}/>
    <Route path='/patient-info' element={<PatientInfo/>}/>


    {/* admin */}
    <Route path='/patientlogin' element={<PatientLogin/>}/>
    <Route path='/admin' element={<Dashboard/>}/>
    <Route path='/admin/create-patient-credentials' element={<PatientInfo/>}/>
    

    {/* <Route path='/patienthealth' element={<PatientHealth/>}/>
    <Route path='/patientform' element={<Patientform/>}/> */}


    <Route path='*' element={<PageNotFound/>}/>

  </Routes>
    </>
  )
}

export default App
