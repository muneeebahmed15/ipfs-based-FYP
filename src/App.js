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
import DoctorRoutes from './Components/Main/Doctor/doctor-routes'
import AdminRoutes from './Components/Main/Admin/admin-routes'
import AddSinglePatient from './Components/Main/Admin/AddSinglePatient'
import Test from './Components/test'


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
   


       <Route path='/main-login' element={<MainLogin/>}/>

    {/* admin */}
    <Route path='/admin' element={<AdminRoutes/>}>
    <Route path='dashboard' element={<AdminDashboard/>}/>
    <Route path='create-patient' element={<CreatePatient/>}/>
    <Route path='create-doctor' element={<CreateDoctor/>}/>
    <Route path='add-patient-data' element={<AddPatientHealth/>}/>
    <Route path='view-all-patients' element={<ViewAllPatient/>}/>
    <Route path='view-all-doctors' element={<ViewAllDoctor/>}/>
    <Route path='patient-record/:id' element={<AddSinglePatient/>}/>
    </Route>
   
<Route path='/test' element={<Test/>}/>
    {/*doctor*/}
   <Route path='/doctor' element={<DoctorRoutes/>}>
   <Route path='dashboard' element={<Dashboard/>}/>
   <Route path='all-patients' element={<AllPatients/>}/>
   <Route path='search-patients' element={<SearchPatients/>}/>
   <Route path='my-patients' element={<MyPatients/>}/>
   <Route path='patient/:id' element={<SinglePatient/>}/>
   </Route>
    
    {/* Patient */}

    <Route path='*' element={<PageNotFound/>}/>

  </Routes>
    </>
  )
}

export default App;
