
import React from 'react'
import TxtInput from '../UI/TxtInput';
import { useParams } from 'react-router-dom';
import { UsePatient } from '../../actions/admin';
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select } from '@mui/material';
import { LoadData } from '../../actions/doctor';
import Loading from '../UI/Loading';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const HealthRecordModal = ({open, setOpen, closeModel}) => {
   const {id} = useParams();  
  
  const {loading : healthLoading, AddHealthRecord, changeHandler, setData, data} = UsePatient();

  data.patient_id = id;
  
 const {loading : doctorLoading, list: doctorList} = LoadData("doctor/all-doctors");

  return (
    <>
    <Modal
        open={open}
        onClose={closeModel}
      >
        <Box sx={style}>
        <TxtInput label={"Problem"} name={"problem"} value={data.problem} onChange={changeHandler} type={"text"}/>
        <TxtInput label={"Suggestion"} name={"suggestion"} value={data.suggestion} onChange={changeHandler} type={"text"}/>
        <TxtInput label={"Future Visit"} name={"futureVisit"} value={data.futureVisit} onChange={changeHandler} type={"text"}/>
 
        <FormControl variant='filled' className='px-2 mt-2 w-full'>
        <InputLabel>Doctor List</InputLabel>
  <Select
    value={data.doctor_id}
    label="Doctor List"
    name='doctor_id'
    onChange={changeHandler}
  >
    {doctorList.map((x)=> <MenuItem value={x._id}>{doctorLoading ? "loading...": x.fullname}</MenuItem>)}
  </Select>
  </FormControl>
        <Button onClick={AddHealthRecord} style={{backgroundColor: "rgb(79 70 229)"}} className='px-2 mt-2 mx-2 mt-2 text-white'>{healthLoading?<> <Loading loading={healthLoading}/> Loading... </>:"Add Record"}</Button>
        </Box>
      </Modal>
  
    </>
  )
}

export default HealthRecordModal
