


import React from 'react'
import AdminTable from '../../Tables/AdminTable'
import { LoadData } from '../../../actions/doctor';
import Heading from '../../UI/Heading';
import { CiViewList } from "react-icons/ci";


const ViewAllPatient = () => {
  const { loading, list} = LoadData("/patient/get-all-patients");
  return (
    <>

<Heading icon={<CiViewList style={{fontSize: "25px"}}/>} title={"All Patients"}/>

      <AdminTable loading={loading} data={list} from={"admin"}/>
    </>
  )
}

export default ViewAllPatient
