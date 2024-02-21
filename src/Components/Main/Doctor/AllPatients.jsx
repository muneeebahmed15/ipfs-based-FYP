import React from 'react'
import MainLayout from '../MainLayout'
import { LoadData } from '../../../actions/doctor'
import DoctorTable from '../../Tables/DoctorTable';

const AllPatients = () => {
 const {loadPatients, loading, list} = LoadData();
  return (
    <>
        <DoctorTable data={list} loading={loading} />
    </>
  )
}

export default AllPatients