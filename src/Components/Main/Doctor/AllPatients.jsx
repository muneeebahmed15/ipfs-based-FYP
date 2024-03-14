

import React from 'react'
import { LoadData } from '../../../actions/doctor';
import DoctorTable from '../../Tables/DoctorTable';
import Heading from '../../UI/Heading';
import { CiViewList } from "react-icons/ci";



const AllPatients = () => {
 const {loading, list} = LoadData("patient/get-all-patients");
  return (
    <>

<Heading icon={<CiViewList style={{fontSize:"25px"}}/>} title={"All Patients"}/>


        <DoctorTable data={list} loading={loading} />
    </>
  )
}

export default AllPatients