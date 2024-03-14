
import React, { useState } from 'react'
import MainLayout from '../MainLayout'
import { Button, TextField } from '@mui/material'
import { SearchByCNIC } from '../../../actions/doctor';
import PatientFiller from '../Reuse/PatientFiller';
import Heading from '../../UI/Heading';
import { FaSearch } from "react-icons/fa";


const SearchPatients = () => {
  const [value, setValue] = useState('');
  const {search, loading, list} = SearchByCNIC(value);
  const admin = list?.admin_id;
  const health = list?.healthRecord;

  const changeHandler = (e)=>{
    setValue(e.target.value);
  }

  return (
    <>

<Heading icon={<FaSearch style={{fontSize:"25px"}}/>} title={"Search Patients"}/>

      <div className='my-4 mx-4'>

        <div className='flex justify-end items-center'>
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
      
      <Button className='text-white mb-2' onClick={search} style={{backgroundColor: "rgb(79 70 229)", marginRight:"60px"}}>{loading? "loading...": "Search By CNIC"}</Button>
      </div>

      <PatientFiller list={list} admin={admin} health={health} loading={loading}/>
      </div>
      
    </>
  )
}

export default SearchPatients
