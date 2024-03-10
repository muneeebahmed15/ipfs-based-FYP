import React, { useState } from 'react';

const Test = () => {
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
      
        <input type="text" name="firstString"  value={firstString} onChange={changeHandler}/>
        <input type="text" name="SecondString"  value={secondString} onChange={changeHandler}/>
        <button onClick={test}>Check</button>
      
    </>
  )
}

export default Test
