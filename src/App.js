import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import PageNotFound from './Components/404Page/PageNotFound'
import Dashboard from './Screens/Admin/Dashboard'
import PatientInfo from './Screens/Admin/PatientInfo'
import DoctorInfo from './Screens/Admin/DoctorInfo'
import PatientHealth from './Screens/Admin/PatientHealth'
import AdminLogin from './Components/Admin/AdminLogin'
import ProtectedRoutes from './Components/ProtectedRoutes'
import DoctorLogin from './Components/Doctor/DoctorLogin'
import DoctorInformation from './Screens/Doctor/DoctorInformation'
import DoctorView from './Screens/Doctor/DoctorView'
import PatientHome from './Screens/Patient/patient-home'
import About from './Components/About'
import Contact from './Components/Contact'
import Mission from './Components/Mission'
import Login from './Components/Login'
import Carousel from './Components/Carousel'


const App = () => {
  return (
    <>
  <Routes>
    <Route path='/' element={<Carousel/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/mission' element={<Mission/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/patient-login' element={<Login/>}/>
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
