import { TextField } from '@mui/material'
import React from 'react'

const TxtDisplay = ({value, label}) => {
  return (
    <TextField
          required
          id="filled-basic"
          variant='filled'
          label={label}
          defaultValue={value}
          className='mb-3 px-2' InputProps={{ readOnly: true }}
        />
  )
}

export default TxtDisplay
