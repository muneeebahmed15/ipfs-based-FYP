import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const PatientTable = ({data, loading}) => {
  return (
    <div>
    <TableContainer className='container'>
    <Table sx={{ minWidth: 450 }} aria-label="simple table">
      <TableHead >
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Patient ID</TableCell>
          <TableCell>Problem</TableCell>
          <TableCell>Suggestion</TableCell>
          <TableCell>Future Visit</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      {loading ? "Loading...":
      <TableBody>
        {data.map((x) => (
          <TableRow key={x._id} >
            <TableCell component="th" scope="row">
             {new Date(x.createdAt).toLocaleDateString()}
            </TableCell>
             <TableCell>{x.patient_id}</TableCell>
            <TableCell>{x.problem}</TableCell>
            <TableCell>{x.suggestion}</TableCell>
            <TableCell>{x.futureVisit}</TableCell>
            <TableCell>icon</TableCell>
          </TableRow>
        ))}
      </TableBody>}
    </Table>
  </TableContainer>
    </div>
  )
}

export default PatientTable