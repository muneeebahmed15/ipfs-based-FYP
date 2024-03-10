import { TextField } from '@mui/material'
import React from 'react'

const TxtInput = ({label, name, value, onChange, type}) => {
  return (
    <div>
        <TextField 
         label={label} 
         name={name} 
         value={value} 
         onChange={onChange} 
         type={type}
         required
         variant="filled"  className="px-2 mt-2 w-full"/>
       </div>
  )
}

export default TxtInput;