import React, { useState } from 'react'
import AdminTable from '../../Tables/AdminTable'
import { LoadData } from '../../../actions/doctor'
import { FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Box, Button, Modal } from '@mui/material';
import { UsePatient } from '../../../actions/admin';
import TxtInput from '../../UI/TxtInput';

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

const heading={fontSize: '16px', fontWeight:"bold"}

const AddPatientHealth = () => {
  const { loading, list} = LoadData("patient/get-all-patients");
  const [open, setOpen] = useState(false);
  const {loading : healthLoading, AddHealthRecord, changeHandler, setData, data} = UsePatient();
  
 const {loading : doctorLoading, list: doctorList} = LoadData("doctor/all-doctors");

  const openModal = (id) =>{
    setOpen(true);
    data.patient_id = id;
  }

  const closeModel =() =>{
      setOpen(false);
        data.patient_id = null;
  }

  return (
    <>
    <small><i className='text-red-600'>If table is empty means no patient is registered today</i></small>

<TableContainer>
<Table sx={{ minWidth: 450 }} aria-label="simple table">
  <TableHead >
    <TableRow>
      <TableCell style={heading}>Date</TableCell>
      <TableCell style={heading}>Patient Name</TableCell>
      <TableCell style={heading}>Email</TableCell>
      <TableCell style={heading}>Gender</TableCell>
      <TableCell style={heading}>DOB</TableCell>
      <TableCell style={heading}>Phone</TableCell>
      <TableCell></TableCell>
    </TableRow>
  </TableHead>
  {loading ? "Loading...":
  <TableBody>
    {list.map((x) => {

const currentDate = new Date();
const recordDate = new Date(x.createdAt);
const SameDate = currentDate.toLocaleDateString() === recordDate.toLocaleDateString();

if(SameDate){
return (
  <TableRow key={x._id}>
    <TableCell component="th" scope="row">
      {x.createdAt.slice(0, 10)}
    </TableCell>
    <TableCell>{x.fullname}</TableCell>
    <TableCell>{x.email}</TableCell>
    <TableCell>{x.gender}</TableCell>
    <TableCell>{x.DOB.slice(0, 10)}</TableCell>
    <TableCell>{x.phone}</TableCell>
      <TableCell>
        <IoIosAddCircleOutline size={20} role='button' onClick={() => openModal(x._id)} />
      </TableCell>
  </TableRow>
);
}}) }
</TableBody>}
</Table>
</TableContainer>

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
        <Button onClick={AddHealthRecord} className='px-2 mt-2'>{healthLoading? "loading..." :"Add Record"}</Button>
        </Box>
      </Modal>

    </>
  )
}


export default AddPatientHealth
