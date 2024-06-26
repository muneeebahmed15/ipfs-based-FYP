import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Redirecting = () => {
    const [count, setCount] = useState(5);
    const router = useNavigate();

    useEffect(()=>{
        const _interval = setInterval(()=>{
            setCount(count-1)
        },1000)
        if(count===0){
            router("/")
            return()=>clearInterval(_interval);
        }
    },[count]);

  return (
    <div>
      Please wait for {count} seconds
    </div>
  )
}

export default Redirecting
