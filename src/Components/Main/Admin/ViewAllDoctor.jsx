

import React from 'react'
import { LoadData } from '../../../actions/doctor'
import AdminTable from '../../Tables/AdminTable';
import Heading from '../../UI/Heading';
import { CiViewList } from 'react-icons/ci';

const ViewAllDoctor = () => {
 const {loading, list} = LoadData("doctor/all-doctors");
  return (
    <>

      
<Heading icon={<CiViewList style={{fontSize: "25px"}}/>} title={"All Doctors"}/>

      <AdminTable loading={loading} data={list} from={"doctor"}/>
    </>
  )
}

export default ViewAllDoctor
