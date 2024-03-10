import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PatientHealth, UsePatient } from '../../../actions/admin';
import PatientTable from '../../Tables/PatientTable';
import { Button } from '@mui/material';
import HealthRecordModal from '../../Modals/HealthRecordModal';
import { LoadData } from '../../../actions/doctor';



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
    <div className='flex justify-end px-8'>
        <Button className='mx-3' onClick={loadHealth}>Reload</Button>
      
        <Button onClick={openModal}>Add Record</Button>
    </div>

    <HealthRecordModal open={open} setOpen={setOpen} closeModel={closeModel}/>

{list && (list && list.length > 0)?  <PatientTable data={list} loading={loading} from={"admin"}/>
 : loading ? "loading..." : "No Record History"
  }
    </>
  )
}

export default AddSinglePatient