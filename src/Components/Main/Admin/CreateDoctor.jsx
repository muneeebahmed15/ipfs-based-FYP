

import { Button } from '@mui/material'
import TxtInput from '../../UI/TxtInput'
import { RegisterData } from '../../../actions/admin'
import { IoIosAddCircleOutline } from 'react-icons/io'
import Heading from '../../UI/Heading'
import Loading from '../../UI/Loading'

const CreateDoctor = () => {
  const {loading, registerUser, data, changeHandler} = RegisterData("doctor/register")

  data.role = "doctor";

  return (
    <>

<Heading icon={<IoIosAddCircleOutline style={{fontSize: "25px"}}/>} title={"Add Doctor"}/>

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

      {/* <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <TxtInput label={"Role"} type={"text"} name={"role"} defaultValue={"doctor"} value={data.password} onChange={changeHandler}/>
      </div> */}
      </div>

      <div className='flex w-full justify-end '>
      <Button className='text-white px-3 py-2' style={{marginRight:"30px", backgroundColor: "rgb(79 70 229)"}} onClick={registerUser}>{loading? <><Loading loading={loading}/> Loading... </>: "Register Patient"}</Button> 
      
      </div>
      </>
  )
}

export default CreateDoctor