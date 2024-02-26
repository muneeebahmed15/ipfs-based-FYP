import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react';
import { FaRegFolderClosed } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const AdminTable = ({data, loading}) => {
  return (
    <div>
    <TableContainer className='container p-2'>
    <Table sx={{ minWidth: 450 }} aria-label="simple table">
      <TableHead >
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Patient Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>DOB</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Details</TableCell>
        </TableRow>
      </TableHead>
      {loading ? "Loading...":
      <TableBody>
        {data.map((x) => (
          <TableRow key={x._id} >
            <TableCell component="th" scope="row">
             {x.createdAt.slice(0,10)}
            </TableCell>
             <TableCell>{x.fullname}</TableCell>
            <TableCell>{x.email}</TableCell>
            <TableCell>{x.gender}</TableCell>
            <TableCell>{x.DOB.slice(0,10)}</TableCell>
            <TableCell>{x.phone}</TableCell>
            <TableCell>
              <Link to={`/admin/patient-record/${x._id}`}> <FaRegFolderClosed size={20} role='buttons'/></Link>
              </TableCell>
          </TableRow>
        ))}
      </TableBody>}
    </Table>
  </TableContainer>
    </div>
  )
}

export default AdminTable
