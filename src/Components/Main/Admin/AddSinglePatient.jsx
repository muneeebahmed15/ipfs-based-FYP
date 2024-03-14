

import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PatientHealth, UsePatient } from '../../../actions/admin';
import PatientTable from '../../Tables/PatientTable';
import { Button } from '@mui/material';
import HealthRecordModal from '../../Modals/HealthRecordModal';
import { LoadData } from '../../../actions/doctor';
import Heading from '../../UI/Heading';
import { RiPagesLine } from "react-icons/ri";



const AddSinglePatient = () => {
  const { id } = useParams();
  const { loading, list, loadHealth} = PatientHealth(id);

  const [open, setOpen] = useState(false);

  // const { loading, list} = LoadData("patient/get-all-patients");
  // const [open, setOpen] = useState(false);

  const openModal = (id) =>{
    setOpen(true);
  }

  const closeModel =() =>{
      setOpen(false);
  }

  return (
    <>

    <Heading icon={<RiPagesLine  style={{fontSize:"25px"}}/>} title={"Patient Record"}/>

    <div className='flex justify-end px-8'>
        <Button className='my-3 mx-3 px-3 py-2 text-white hover-effect' style={{backgroundColor: "rgb(129, 120, 255)"}} onClick={loadHealth}>Reload</Button>
      
        <Button className='my-3 mr-4 px-3 py-2 text-white' onClick={openModal} style={{backgroundColor: "rgb(79 70 229)"}}>Add Record</Button>
    </div>

    <HealthRecordModal open={open} setOpen={setOpen} closeModel={closeModel}/>

{list && (list && list.length > 0)?  <PatientTable data={list} loading={loading} from={"admin"}/>
 : loading ? "loading..." : "No Record History"
  }
    </>
  )
}

export default AddSinglePatient