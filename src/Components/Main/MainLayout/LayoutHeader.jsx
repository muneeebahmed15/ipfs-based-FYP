
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AdminNavs, DoctorNavs } from './sidenav';
import { SubmitData } from '../../../actions/common.actions';
import { Link, useLocation } from 'react-router-dom';
import { _AuthContext } from '../../../Context/AuthContext';
import TxtDisplay from '../../UI/TxtDisplay';
import { TiThMenu } from "react-icons/ti";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LayoutHeader = () => {
 const [auth] = _AuthContext();
 const {logoutUser} = SubmitData("/main-login");

 
 const location = useLocation().pathname;
 const includeLocation = location.includes("/doctor");


 let data =  auth?.user?.role === "admin" ? AdminNavs : auth?.user?.role === "doctor"? DoctorNavs : []
 
 
 const [open2, setOpen2] = useState(false);

  const [open, setOpen] = useState(false);
  return (
    <>
    {/* {JSON.stringify(auth?.user)} */}

    <div className='flex justify-between'>

    <div className=' md:hidden'>
    <Button onClick={()=>setOpen(true)} className='bg-indigo-600 text-white'><TiThMenu /></Button>
          <Drawer 
          sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: "#1f2937", // bg-gray-600
            color: 'white',
            paddingTop: "8rem",
          },
        }}
        
            anchor="left"
            open={open}
            onClose={()=>setOpen(false)}
          >
            <Box
      sx={{ width: 150 }}
      role="presentation"
      onClick={()=>setOpen(false)}
      onKeyDown={()=>setOpen(true)}
    >
      <List>
      {data.map((x, index) => (
          <Link to={x.link}><ListItem key={index} disablePadding>
          <ListItemButton>
            <ListItemText primary={x.name} />
          </ListItemButton>
        </ListItem></Link>
        ))}
      </List>
  
      </Box>
          </Drawer>
          </div>

    <div className='text-white'>
        <h3 className='md:hidden'>Welcome Muneeb</h3>
    </div>


<div className='flex flex-row px-2'>
   
  <div>
  <Button className='mx-2 text-white'  onClick={()=>setOpen2(true)}>Profile</Button>
        </div>

{/* <ProfileModal setOpen={setOpen2} open={open2}/> */}

          <div>
       <Link to={"/main-login"}>   <Button className='text-white hover:bg-indigo-800' style={{backgroundColor: "rgb(79 70 229)"}} onClick={logoutUser}>Logout</Button></Link>
        </div>

        </div>

        </div>

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
    
<TxtDisplay label={"Name"} value={includeLocation ? auth?.user?.fullname : auth?.user.name}/>

<TxtDisplay label={"Email"} value={auth?.user?.email}/>

{/* <TxtDisplay label={"DOB"} value={auth?.user?.DOB}/> */}

{/* <TxtDisplay label={"Username"} value={auth?.user?.username}/> */}

{/* <TxtDisplay label={"Phone"} value={auth?.user?.phone}/> */}

{/* <TxtDisplay label={"Gender"} value={auth?.user?.gender}/> */}
   
<Button variant="contained" onClick={"heelo"}>Change Password</Button>

  </Box>
</Modal>
          </>
  )
}

export default LayoutHeader