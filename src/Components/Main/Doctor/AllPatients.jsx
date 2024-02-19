import React from 'react'
import MainLayout from '../MainLayout'
import { LoadData } from '../../../actions/doctor'
import DoctorTable from '../../Tables/DoctorTable';

const AllPatients = () => {
 const {loadPatients, loading, list} = LoadData();
  return (
    <MainLayout>
        <DoctorTable data={list} loading={loading} />
    </MainLayout>
  )
}

export default AllPatients