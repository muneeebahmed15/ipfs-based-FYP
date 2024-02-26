import React from 'react'
import { useParams } from 'react-router-dom'
import { PatientHealth } from '../../../actions/admin';
import PatientTable from '../../Tables/PatientTable';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const AddSinglePatient = () => {
  const { id } = useParams();
  const { loading, list} = PatientHealth(id);

  return (
    <>
{list && !(list && list.length > 0)? "No Record History" :
    <PatientTable data={list} loading={loading} from={"admin"}/>
  }
    </>
  )
}

export default AddSinglePatient