import React, { useState } from 'react'
import MainLayout from '../MainLayout'
import { Button, TextField } from '@mui/material'
import { SearchByCNIC } from '../../../actions/doctor';
import PatientFiller from '../Reuse/PatientFiller';

const SearchPatients = () => {
  const [value, setValue] = useState('');
  const {search, loading, list} = SearchByCNIC(value);
  const admin = list?.admin_id;
  const health = list?.healthRecord;

  const changeHandler = (e)=>{
    setValue(e.target.value);
  }

  return (
    <MainLayout>
      <div className=''>

        <div>
       <TextField
       required
        id="filled-basic"
        variant="filled"
        label="CNIC"
        name="cnic"
        value={value}   
        onChange={changeHandler}
        className="mb-3 px-2"
      />
      <Button onClick={search}>{loading? "loading...": "Search By CNIC"}</Button>
      </div>

      <PatientFiller list={list} admin={admin} health={health} loading={loading}/>
      </div>
      
    </MainLayout>
  )
}

export default SearchPatients
