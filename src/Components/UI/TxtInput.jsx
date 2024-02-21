import { TextField } from '@mui/material'
import React from 'react'

const TxtInput = ({label, name, value, onChange}) => {
  return (
    <div>
        <TextField id="filled-basic"
         label={label} 
         name={name} 
         value={value} 
         onChange={onChange} 
         variant="filled"  className="px-2 mt-2"/>
       </div>
  )
}

export default TxtInput