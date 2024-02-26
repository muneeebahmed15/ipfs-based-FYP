import React from 'react'
import AdminTable from '../../Tables/AdminTable'
import { LoadData } from '../../../actions/doctor'

const AddPatientHealth = () => {
  const { loading, list} = LoadData();
  return (
    <>
      <AdminTable loading={loading} data={list}/>
    </>
  )
}

export default AddPatientHealth
