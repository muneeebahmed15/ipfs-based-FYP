import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Loading from '../UI/Loading';
import { Link } from 'react-router-dom';
import { FaRegFolderClosed } from 'react-icons/fa6';


const PatientTable = ({data, loading, icon, from}) => {


  return (
    <>
    <TableContainer className='container'>
    <Table sx={{ minWidth: 450 }} aria-label="simple table">
      <TableHead >
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Problem</TableCell>
          <TableCell>Suggestion</TableCell>
          <TableCell>Future Visit</TableCell>
          {from ==="doctor" && <>
              <TableCell>Checked By</TableCell> </> }
          {icon && <TableCell></TableCell>}
        </TableRow>
      </TableHead>
      {loading ? <Loading loading={loading}/>:
      <TableBody>
        {data?.map((x) => (
          <TableRow key={x._id} >
            <TableCell component="th" scope="row">
             {new Date(x.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell>{x.problem}</TableCell>
            <TableCell>{x.suggestion}</TableCell>
            <TableCell>{x.futureVisit}</TableCell>
            {from ==="doctor" && <>
                <TableCell>{ x.doctor_id.fullname }</TableCell></>}
            {icon && <TableCell>"icon"</TableCell>}

            {/* {from === "admin" &&  <TableCell>
         <Link to={`/admin/patient-record/${x._id}`}>
            <FaRegFolderClosed size={20} role='button' />
          </Link>
        </TableCell> } */}

          </TableRow>
        ))}

        
      </TableBody>}
    </Table>
  </TableContainer>

  
    </>
  )
}

export default PatientTable