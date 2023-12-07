import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import LandingPage from './Screens/LandingPage'
import Login from './Components/Login/Login'
import PageNotFound from './Components/404Page/PageNotFound'
import PatientLogin from './Components/Admin/PatientLogin'
import AboutPage from './Screens/AboutPage'
import MissionPage from './Screens/MissionPage'
import ContactPage from './Screens/ContactPage'
import LoginPage from './Screens/LoginPage'
import Dashboard from './Screens/Admin/Dashboard'
import PatientInfo from './Screens/Admin/PatientInfo'
import DoctorInfo from './Screens/Admin/DoctorInfo'
import PatientHealth from './Screens/Admin/PatientHealth'
import PatientRecord from './Screens/Patient/PatientRecord'

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


    {/* <Route path='/patient-record' element={<PatientRecord/>}/> */}
    <Route path='/patient-info' element={<PatientInfo/>}/>


    {/* admin */}
    <Route path='/patientlogin' element={<PatientLogin/>}/>
    <Route path='/admin' element={<Dashboard/>}/>
    <Route path='/admin/create-patient-credentials' element={<PatientInfo/>}/>
    <Route path='/admin/create-doctor-credentials' element={<DoctorInfo/>}/>
    <Route path='/admin/add-patient-h-data' element={<PatientHealth/>}/>
    

    {/* <Route path='/patienthealth' element={<PatientHealth/>}/>
    <Route path='/patientform' element={<Patientform/>}/> */}

    {/* Patient */}
    <Route path='/patientrecord' element={<PatientRecord/>}/>

    <Route path='*' element={<PageNotFound/>}/>

  </Routes>
    </>
  )
}

export default App
