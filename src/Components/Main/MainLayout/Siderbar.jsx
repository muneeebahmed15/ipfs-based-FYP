import React, { useState } from 'react'
import { AdminNavs, DoctorNavs } from './sidenav'
import { _AuthContext } from '../../../Context/AuthContext'
import { Link } from 'react-router-dom'

const Siderbar = () => {
  const [ auth] = _AuthContext();

   let data =  auth?.user?.role === "admin" ? AdminNavs : auth?.user?.role === "doctor"? DoctorNavs : []
 
  return (
    <>

    <div className='flex w-full justify-center'>
    <div className='flex flex-col justify-start'>
    <div className='mt-8 text-xl font-bold'>
        <h1>Welcome Muneeb</h1>
      </div>
<div className='flex flex-col mt-16'> {data.map((x, index)=>
          <Link to={x.link} key={index} className='my-3'>{x.name}</Link>
        )}
        </div>
  </div>
      </div>
    </>
  )
}

export default Siderbar
