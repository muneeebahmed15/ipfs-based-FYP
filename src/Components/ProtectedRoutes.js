import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


// {children}
const ProtectedRoutes = (props) => {
const {Component} = props;
    const navigate = useNavigate();

    useEffect(()=>{
        let data = localStorage.getItem("auth")
        if(!data){
            navigate('/admin');
        }
    });

  return (
    <>
        <Component/>
        {/* {children} */}
        </>
  )
}

export default ProtectedRoutes