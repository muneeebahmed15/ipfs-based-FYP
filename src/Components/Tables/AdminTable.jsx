import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react';
import { FaRegFolderClosed } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import HealthRecordModal from '../Modals/HealthRecordModal';

const heading={fontSize: '16px', fontWeight:"bold"}

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

const AdminTable = ({data, loading, from}) => {

  return (
    <div className='container p-2'>
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
         {from === "admin" &&  <TableCell style={heading}>Details</TableCell> }    
        </TableRow>
      </TableHead>
      {loading ? "Loading..." : (
  <TableBody>
    {data.map((x) => (
      <TableRow key={x._id}>
        <TableCell component="th" scope="row">
          {x.createdAt.slice(0, 10)}
        </TableCell>
        <TableCell>{x.fullname}</TableCell>
        <TableCell>{x.email}</TableCell>
        <TableCell>{x.gender}</TableCell>
        <TableCell>{x.DOB.slice(0, 10)}</TableCell>
        <TableCell>{x.phone}</TableCell>
        {from === "admin" ?
         <TableCell>
         <Link to={`/admin/patient-record/${x._id}`}>
            <FaRegFolderClosed size={20} role='button' />
          </Link>
        </TableCell> 
        : ""}
      </TableRow>
    ))}
  </TableBody>
)}

    </Table>
  </TableContainer>

{/* <HealthRecordModal open={open} setOpen={setOpen}/> */}
    </div>
  )
}

export default AdminTable
