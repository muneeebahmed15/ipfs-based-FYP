import { Button } from '@mui/material'
import TxtInput from '../../UI/TxtInput'
import { RegisterData } from '../../../actions/admin'

const CreatePatient = () => {
  const {loading, registerUser, data, changeHandler} = RegisterData("/patient/register-patient")

  return (
    <>
      <div className='flex flex-wrap m-3'>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <TxtInput label={"Name"} type={"text"} name={"fullname"} value={data.fullname} onChange={changeHandler}/>
      </div>
      
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <TxtInput label={"Father Name"} type={"text"} name={"fathername"} value={data.fathername} onChange={changeHandler}/>
      </div>
      
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <TxtInput label={"CNIC"} type={"number"} name={"CNIC"} value={data.CNIC} onChange={changeHandler}/>
      </div>
      
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <TxtInput label={"DOB"} type={"date"} name={"DOB"} value={data.DOB} onChange={changeHandler}/>
      </div>
      
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <TxtInput label={"Email"} type={"email"} name={"email"} value={data.email} onChange={changeHandler}/>
      </div>
      
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <TxtInput label={"Phone"} type={"number"} name={"phone"} value={data.phone} onChange={changeHandler}/>
      </div>
      
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <TxtInput label={"Gender"}  name={"gender"} value={data.gender} onChange={changeHandler}/>
      </div>
      
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <TxtInput label={"Username"} type={"text"} name={"username"} value={data.username} onChange={changeHandler}/>
      </div>
      
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <TxtInput label={"Password"} type={"password"} name={"password"} value={data.password} onChange={changeHandler}/>
      </div>
      </div>

      <div className='flex w-full justify-end '>
      <Button style={{marginRight:"30px"}} onClick={registerUser}>{loading? "loading.." : "Register Patient"}</Button> 
      
      </div>
      </>
  )
}

export default CreatePatient