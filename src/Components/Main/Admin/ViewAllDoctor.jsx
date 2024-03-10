import React from 'react'
import MainLayout from '../MainLayout'
import { LoadData } from '../../../actions/doctor'
import AdminTable from '../../Tables/AdminTable';

const ViewAllDoctor = () => {
 const {loading, list} = LoadData("doctor/all-doctors");
  return (
    <>
      <AdminTable loading={loading} data={list} from={"doctor"}/>
    </>
  )
}

export default ViewAllDoctor
