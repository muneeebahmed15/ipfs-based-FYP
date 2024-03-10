import React, { useState } from 'react'
import MainLayout from '../MainLayout'

const Dashboard = () => {
    const [firstString, setFirstString] = useState();
    const [secondString, setSecondString] = useState();

    const changeHandler = (e)=>{
        setFirstString({...firstString, [e.target.name]: e.target.value})
        setSecondString({...secondString, [e.target.name]: e.target.value})
    }

    console.log(firstString,"firststring");
    console.log(secondString,"secondstring");

  const test = ()=>{
    if(firstString.length === secondString.length){
      console.log("both string lengths are equal");
    }
  }


  return (
    <>
      <h1>
        <input type="text" name="firstString"  value={firstString} onChange={changeHandler}/>
        <input type="text" name="SecondString"  value={secondString} onChange={changeHandler}/>
        <button onClick={test}>Check</button>
      </h1>
    </>
  )
}

export default Dashboard
