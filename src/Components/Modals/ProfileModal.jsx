import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React from 'react'
import TxtDisplay from '../UI/TxtDisplay';
import { getUserData } from '../Main/Admin/admin-routes';
import { _AuthContext } from '../../Context/AuthContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ProfileModal = ({open2, setOpen2}) => {
  // const [open, setOpen] = useState(false);


  return (
    <>

      <Modal
  open= {open2}
  onClose= {()=>setOpen2(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h5" component="h2" className='mb-3'>
      Profile
    </Typography>
    
<TxtDisplay label={"Name"}/>

<TxtDisplay/>

<TxtDisplay/>

<TxtDisplay/>

<TxtDisplay/>
   
<Button variant="contained" onClick={"heelo"}>Change Password</Button>

  </Box>
</Modal>

    </>
  )
}

export default ProfileModal
