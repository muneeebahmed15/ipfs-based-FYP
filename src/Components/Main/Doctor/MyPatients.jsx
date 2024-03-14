import React from 'react'
import { LoadData } from '../../../actions/doctor';
import { _AuthContext } from '../../../Context/AuthContext';
import DoctorTable from '../../Tables/DoctorTable';

const MyPatients = () => {
  
  const { loading, list} = LoadData("/patient/get-all-patients");



  return (
    <>
    
    <DoctorTable data={list} loading={loading} />


    </>
  )
}

export default MyPatients