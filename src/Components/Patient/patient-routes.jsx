import React, { useEffect, useState } from 'react'
import { _AuthContext } from '../../Context/AuthContext'
import axios from 'axios';
import LandingLayout from '../LandingLayout';
import { Outlet } from 'react-router-dom';
import Redirecting from '../Redirecting';

const PatientRoutes = () => {
   const[auth] = _AuthContext();
   const [loading, setLoading] = useState(true);

   const fetchingCurrentUser  = async ()=>{
    setLoading(false);
    try {
        const res = await axios.get("patient/current");
        console.log(res);
    } catch (error) {
        console.log(error)
    }
};

useEffect(()=>{
    if(auth?.token){
        fetchingCurrentUser();
    }
},[auth && auth?.token]);

  return loading? <Redirecting/> : (
    <LandingLayout>
      <Outlet/>
    </LandingLayout>
  )
}

export default PatientRoutes
