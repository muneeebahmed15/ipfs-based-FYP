import React, { useEffect, useState } from 'react'
import { _AuthContext } from '../../../Context/AuthContext';
import Redirecting from '../../Redirecting';
import MainLayout from '../MainLayout';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const DoctorRoutes = () => {
   const [auth] = _AuthContext();
   const [loading, setLoading] = useState(true);

    const fetchingCurrentUser  = async() =>{
        setLoading(false);
        try { 
            const res = await axios.get("doctor/current");
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        if(auth?.token){
            fetchingCurrentUser();
        }
    },[auth && auth?.token]);

   return loading? <Redirecting/> : (
    <MainLayout>
      <Outlet/>
    </MainLayout>
  )
}

export default DoctorRoutes