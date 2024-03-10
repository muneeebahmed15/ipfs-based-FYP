import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { AdminNavs, DoctorNavs } from './sidenav';
import { SubmitData } from '../../../actions/common.actions';
import { Link } from 'react-router-dom';
import { _AuthContext } from '../../../Context/AuthContext';

const LayoutHeader = () => {
 const [auth] = _AuthContext();
 const {logoutUser} = SubmitData("/main-login");

 let data =  auth?.user?.role === "admin" ? AdminNavs : auth?.user?.role === "doctor"? DoctorNavs : []
 

  const [open, setOpen] = useState(false);
  return (
    <>
    
    <div className='flex justify-between'>

    <div className=' md:hidden'>
    <Button onClick={()=>setOpen(true)} className='bg-white'>Click me</Button>
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
       <Link to={"/main-login"}>   <Button className='bg-white' onClick={logoutUser}>Logout</Button></Link>
        </div>
        </div>

        </div>
          </>
  )
}

export default LayoutHeader