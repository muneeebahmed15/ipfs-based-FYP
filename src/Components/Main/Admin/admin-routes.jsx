

import React, { useEffect, useState } from 'react'
import Redirecting from '../../Redirecting';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import MainLayout from '../MainLayout';
import { _AuthContext } from '../../../Context/AuthContext';

const AdminRoutes = () => {
    const [auth] = _AuthContext();
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState("")
 
     const fetchingCurrentUser  = async() =>{
         setLoading(false);
         try { 
             const res = await axios.get("users/current");
             console.log(res.data.user);
            //  setUserData(res.data)
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

//  export const getUserData = (userData) => {
//     return userData;
//     console.log(userData);
//   };

export default AdminRoutes


