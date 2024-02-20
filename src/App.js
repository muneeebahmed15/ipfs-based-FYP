import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import PageNotFound from './Components/404Page/PageNotFound'
import Dashboard from './Components/Main/Doctor/Dashboard'
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
import AdminDashboard from './Components/Main/Admin/Dashboard'
import CreatePatient from './Components/Main/Admin/CreatePatient'
import CreateDoctor from './Components/Main/Admin/CreateDoctor'
import AddPatientHealth from './Components/Main/Admin/AddPatientHealth'
import ViewAllPatient from './Components/Main/Admin/ViewAllPatient'
import ViewAllDoctor from './Components/Main/Admin/ViewAllDoctor'
import PatientRoutes from './Components/Patient/patient-routes'


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
    <Route path='/patient' element={<PatientRoutes/>}>
       <Route path='home/:id' element={<PatientHome/>}/>
       </Route>
   


<Route path='/layout' element={<MainLayout/>}/>

    {/* admin */}
    <Route path='/main-login' element={<MainLogin/>}/>
    <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
    <Route path='/admin/create-patient' element={<CreatePatient/>}/>
    <Route path='/admin/create-doctor' element={<CreateDoctor/>}/>
    <Route path='/admin/add-patient-data' element={<AddPatientHealth/>}/>
    <Route path='/admin/view-all-patients' element={<ViewAllPatient/>}/>
    <Route path='/admin/view-all-doctors' element={<ViewAllDoctor/>}/>
   

    {/*doctor*/}
   <Route path='/doctor/dashboard' element={<Dashboard/>}/>
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
