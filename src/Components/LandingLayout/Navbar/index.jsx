

import { useEffect, useState } from 'react'
import { logo } from '../../../Assets'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { _AuthContext } from '../../../Context/AuthContext'
import { SubmitData } from '../../../actions/common.actions'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { LoadData, Updation } from '../../../actions/patient'
import { useLocation } from 'react-router-dom'


const Navbar = () => {
   const {id} = useParams();
  const [auth] = _AuthContext();
 const {data, loading} = LoadData(id);
 const router = useNavigate();

 const location = useLocation();

   const {logoutUser} = SubmitData();
  const {updatePassword, loading : passwordLoading, changeHandler} = Updation();

    const [state, setState] = useState(false)
    const [open, setOpen] = useState(false)
    const [passwordModal, setPasswordModal] = useState(false)

    const [type, setType] = useState("password");
    
    const changeType =()=>{
      if(type === "password"){
        setType("text");
      }else{
        setType("password")
      }
    }

    const navigation = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Our Mission", path: "/mission" },
        { title: "Contact", path: "/contact" }
    ]  

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

      const style2 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };


      const secondModal = () =>{
        setPasswordModal(true);
        setOpen(false);
      }

      const authToken = auth && auth?.token && auth?.user?.role === "patient";
      useEffect(()=>{
        if(authToken){
            router(`/patient/home/${auth?.user?._id}`)
        }
      },[authToken])

    return (
        <>
        <nav className="bg-gray-900 border-b w-full md:static md:text-sm md:border-none">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to="/">
                        <img
                            src={logo}
                            width={80}
                            alt="Float UI logo"
                        />
                    </Link>
                    <div className="md:hidden">
                        <button className="text-white hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {!authToken && navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className={`hover:text-gray-600 ${location.pathname === item.path ? "text-indigo-600 border-b-2 border-indigo-600" : "text-white"}`}>
                                        <Link to={item.path} className="block">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                      }
                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                  
                             {auth?.token && auth?.user?.role ==="patient" ? <li>
                                <p className="block  p-2 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline md:mr-3" onClick={()=>setOpen(true)}>
                                    Profile
                                </p>
                                 <Link to={"/patient-login"} className="block p-2 mt-2 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline" onClick={logoutUser}>
                                    Logout
                                </Link></li> : <li> <Link to="/patient-login" className="block p-2 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                                    Login
                                </Link>
                            </li>}
                        </div>
                    </ul>
                </div>
            </div>
        </nav>

        <div>       
<Modal
  open={open}
  onClose={()=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h5" component="h2" className='mb-3'>
      Profile
    </Typography>
    
    {loading? "Loading ..." : <>
    <TextField
          required
          id="filled-basic"
          variant='filled'
          label="Patient Name"
          defaultValue={data.fullname}
          className='mb-3 px-1' InputProps={{ readOnly: true }}
        />
  <TextField
          required
          id="filled-basic"
          variant='filled'
          label="Patient Email"
          defaultValue={data.email}
          className='mb-3 px-1'  InputProps={{ readOnly: true }}
        />
        <TextField
          required
          id="filled-basic"
          variant='filled'
          label="Patient DOB"
          defaultValue={data?.DOB?.slice(0,10)} //.slice(0,10)
          className='mb-3 px-1' InputProps={{ readOnly: true }}
        />
         <TextField
          required
          id="filled-basic"
          variant='filled'
          label="Patient Gender"
          defaultValue={data.gender}
          className='mb-3 px-1' InputProps={{ readOnly: true }}
        />
        <TextField
          required
          id="filled-basic"
          variant='filled'
          label="Patient phone"
          defaultValue={data.phone}
          className='mb-3 px-1' InputProps={{ readOnly: true }}
        />
         <TextField
          required
          id="filled-basic"
          variant='filled'
          label="Patient username"
          defaultValue={data.username}
          className='mb-3 px-1' InputProps={{ readOnly: true }}
        />
        
<Button variant="contained" onClick={secondModal}>Change Password</Button>
    </>
    }
  </Box>
</Modal>
        </div>

        <Modal
  open={passwordModal}
  onClose={()=>setPasswordModal(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style2}>
  <Typography id="modal-modal-title" variant="h5" component="h2" className='mb-3'>
      Change Password
    </Typography>

    <TextField
          required
          variant='filled'
          label="Current Password"
          className='mb-3 px-2'
          name='currentPassword'
          onChange={changeHandler}
          type={type}
        />

<TextField
          required
          variant='filled'
          label="New Password"
          className='px-2'
          name='newPassword'
          onChange={changeHandler}
          type={type}
        />
        <small onClick={changeType} className='flex justify-end mb-2 hover: underline' role='button'>{type === "password"? "Show Password": "Hide Password"}</small>
    
<Button variant="contained" onClick={updatePassword} role='button'>{passwordLoading? "Loading...":"Save Changes"}</Button>
  </Box>
</Modal>
        </>
    )
}


export default Navbar;