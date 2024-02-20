import React from 'react'
import MainLayout from '../MainLayout'
import { TextField } from '@mui/material'
import TxtInput from '../../UI/TxtInput'
import { RegisterData } from '../../../actions/admin'
import { _AuthContext } from '../../../Context/AuthContext'

const CreatePatient = () => {
  const [auth] = _AuthContext();
  const {loading, registerUser, data, changeHandler} = RegisterData("/patient/register-patient")

  data.role= "patient";
  data.admin_id = auth?.user?._id;

  return (
    <MainLayout>
      <div className='flex flex-wrap'>
      <TxtInput label={"Name"} name={"fullname"} value={data.fullname} onChange={changeHandler}/>
      <TxtInput label={"Father Name"} name={"fathername"} value={data.fathername} onChange={changeHandler}/>
      <TxtInput label={"CNIC"} name={"CNIC"} value={data.CNIC} onChange={changeHandler}/>
      <TxtInput label={"DOB"} name={"DOB"} value={data.DOB} onChange={changeHandler}/>
      <TxtInput label={"Email"} name={"email"} value={data.email} onChange={changeHandler}/>
      <TxtInput label={"Phone"} name={"phone"} value={data.phone} onChange={changeHandler}/>
      <TxtInput label={"Gender"} name={"gender"} value={data.gender} onChange={changeHandler}/>
      <TxtInput label={"Username"} name={"username"} value={data.username} onChange={changeHandler}/>
      <TxtInput label={"Password"} name={"password"} value={data.password} onChange={changeHandler}/>
      </div>
      </MainLayout>
  )
}

export default CreatePatient