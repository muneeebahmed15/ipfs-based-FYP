import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import PageNotFound from './Components/404Page/PageNotFound'
import Dashboard from './Components/Main/Doctor/Dashboard'
import PatientInfo from './Screens/Admin/PatientInfo'
import DoctorInfo from './Screens/Admin/DoctorInfo'
import PatientHealth from './Screens/Admin/PatientHealth'
import ProtectedRoutes from './Components/ProtectedRoutes'
import PatientHome from './Screens/Patient/patient-home'
import About from './Components/Patient/About'
import Contact from './Components/Patient/Contact'
import Login from './Components/Patient/Login'
import Carousel from './Components/Patient/Carousel'
import Mission from './Components/Patient/Mission'
import MainLayout from './Components/Main/MainLayout'
import AllPatients from './Components/Main/Doctor/AllPatients'
import SearchPatients from './Components/Main/Doctor/SearchPatients'
import MyPatients from './Components/Main/Doctor/MyPatients'
import MainLogin from './Components/Main/MainLogin'
import SinglePatient from './Components/Main/Doctor/SinglePatient'


const App = () => {
  return (
    <>
  <Routes>
    <Route path='/' element={<Carousel/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/mission' element={<Mission/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/patient-login' element={<Login/>}/>


    {/* patient */}
    <Route path='/patient-home/:id' element={<PatientHome/>}/>


<Route path='/layout' element={<MainLayout/>}/>

    {/* admin */}
    <Route path='/main-login' element={<MainLogin/>}/>
    {/* <Route path='/admin/dashboard' element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>}/> */}
    {/* <Route path='/admin/dashboard' element={<ProtectedRoutes Component={Dashboard}/>}/> */}
    <Route path='/admin/create-patient-credentials' element={<ProtectedRoutes Component={PatientInfo}/>}/>
    <Route path='/admin/create-doctor-credentials' element={<ProtectedRoutes Component={DoctorInfo}/>}/>
    <Route path='/admin/add-patient-h-data' element={<ProtectedRoutes Component={PatientHealth}/>}/>


    {/*doctor*/}
   <Route path='/doctor' element={<Dashboard/>}/>
   <Route path='/doctor/all-patients' element={<AllPatients/>}/>
   <Route path='/doctor/search-patients' element={<SearchPatients/>}/>
   <Route path='/doctor/my-patients' element={<MyPatients/>}/>
   <Route path='/doctor/patient/:id' element={<SinglePatient/>}/>
    
    {/* Patient */}

    <Route path='*' element={<PageNotFound/>}/>

  </Routes>
    </>
  )
}

export default App;
