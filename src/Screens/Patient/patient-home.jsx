import React from 'react'
import { useParams } from 'react-router-dom';
import LandingLayout from '../../Components/LandingLayout';
import { LoadData } from '../../actions/patient';
import Footer from '../../Components/LandingLayout/Footer';
import Navbar from '../../Components/LandingLayout/Navbar';

const PatientHome = () => {
  
  const {id} = useParams();
  const {data, loading, healthRecord} = LoadData(id)

  return (
    <>
    <Navbar/>
    <div>{loading? "Loading...": <div>{JSON.stringify(healthRecord)}</div>}
    </div>
    <Footer/>
    </>
  )
}

export default PatientHome