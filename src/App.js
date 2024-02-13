import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import LandingPage from './Screens/LandingPage'
// import Login from './Components/Login/Login'
import PageNotFound from './Components/404Page/PageNotFound'
// import PatientLogin from './Components/Admin/PatientLogin'
import AboutPage from './Screens/AboutPage'
import MissionPage from './Screens/MissionPage'
import ContactPage from './Screens/ContactPage'
// import LoginPage from './Screens/LoginPage'
import Dashboard from './Screens/Admin/Dashboard'
import PatientInfo from './Screens/Admin/PatientInfo'
import DoctorInfo from './Screens/Admin/DoctorInfo'
import PatientHealth from './Screens/Admin/PatientHealth'
import AdminLogin from './Components/Admin/AdminLogin'
import ProtectedRoutes from './Components/ProtectedRoutes'
import DoctorLogin from './Components/Doctor/DoctorLogin'
import DoctorInformation from './Screens/Doctor/DoctorInformation'
import LoginPage from './Screens/LoginPage'
import DoctorView from './Screens/Doctor/DoctorView'
import PatientHome from './Screens/Patient/patient-home'


const App = () => {
  return (
    <>
  <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/mission' element={<MissionPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/patient-login' element={<LoginPage/>}/>
    {/* <Route path='/login-as-doctor' element={<Login/>}/> */}


    {/* <Route path='/patient-record' element={<PatientRecord/>}/> */}
    <Route path='/patient-info' element={<PatientInfo/>}/>


    {/* admin */}
    <Route path='/admin' element={<AdminLogin/>}/>
    {/* <Route path='/admin/dashboard' element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>}/> */}
    <Route path='/admin/dashboard' element={<ProtectedRoutes Component={Dashboard}/>}/>
    <Route path='/admin/create-patient-credentials' element={<ProtectedRoutes Component={PatientInfo}/>}/>
    <Route path='/admin/create-doctor-credentials' element={<ProtectedRoutes Component={DoctorInfo}/>}/>
    <Route path='/admin/add-patient-h-data' element={<ProtectedRoutes Component={PatientHealth}/>}/>


    {/*doctor*/}
   
    <Route path='/doctor-login' element={<DoctorLogin/>}/>
    <Route path='/doctor' element={<ProtectedRoutes Component={DoctorView}/>}/>
    <Route path='/doctor-information' element={<ProtectedRoutes Component={DoctorInformation}/>}/>

    {/* <Route path='/patienthealth' element={<PatientHealth/>}/>
    <Route path='/patientform' element={<Patientform/>}/> */}

    {/* Patient */}
    <Route path='/patient-home/:id' element={<PatientHome/>}/>

    <Route path='*' element={<PageNotFound/>}/>

  </Routes>
    </>
  )
}

export default App;
