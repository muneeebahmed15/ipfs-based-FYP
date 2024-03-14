

import React from 'react';
import { AdminNavs, DoctorNavs } from './sidenav';
import { _AuthContext } from '../../../Context/AuthContext';
import { Link, useLocation } from 'react-router-dom';

const Siderbar = () => {
  const location = useLocation().pathname;
  const includeLocation = location.includes("/doctor");

  const [ auth] = _AuthContext();

   let data =  auth?.user?.role === "admin" ? AdminNavs : auth?.user?.role === "doctor"? DoctorNavs : []
 
  return (
    <>

    <div className='flex w-full justify-center'>
    <div className='flex flex-col justify-start'>
    <div className='mt-8 text-xl font-bold'>
        <h1>Welcome { includeLocation ? auth?.user?.fullname : auth?.user?.name}</h1>
      </div>

<div className='flex flex-col mt-16'> {data.map((x, index)=>
          <Link to={x.link} key={index} className={`my-3 ${location === x.link ? "text-indigo-600 border-b-2 border-indigo-600" : "text-white"}`}>{x.name}</Link>
        )}
        </div>
  </div>
      </div>

    </>
  )
}

export default Siderbar
