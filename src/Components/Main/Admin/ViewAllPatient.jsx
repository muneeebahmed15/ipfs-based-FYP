import React from 'react'
import AdminTable from '../../Tables/AdminTable'
import { LoadData } from '../../../actions/doctor';

const ViewAllPatient = () => {
  const { loading, list} = LoadData("/patient/get-all-patients");
  return (
    <>
      <AdminTable loading={loading} data={list} from={"admin"}/>
    </>
  )
}

export default ViewAllPatient
