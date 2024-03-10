import React from 'react'
import { LoadData } from '../../../actions/doctor';
import DoctorTable from '../../Tables/DoctorTable';

const AllPatients = () => {
 const {loading, list} = LoadData("patient/get-all-patients");
  return (
    <>
        <DoctorTable data={list} loading={loading} />
    </>
  )
}

export default AllPatients