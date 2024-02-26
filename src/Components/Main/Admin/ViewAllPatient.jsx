import React from 'react'
import AdminTable from '../../Tables/AdminTable'
import { LoadData } from '../../../actions/doctor';

const ViewAllPatient = () => {
  const { loading, list} = LoadData();
  return (
    <>
      <AdminTable loading={loading} data={list}/>
    </>
  )
}

export default ViewAllPatient
