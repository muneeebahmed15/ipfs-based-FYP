import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header';
import useWindowDimensions from '../../Hook/useWindowDimensions';

const Layout = ({children}) => {
    const [open, setOpen] = useState(false);
    const {width} = useWindowDimensions();

    useEffect(()=>{
        if(width>767){
            setOpen(false);
        }
    },[width])


  return (
    <>
    <div className='h-min-screen flex'>
        <Sidebar open={open} />

        <div className='bg-layout-color text-white w-[100%] md:w-[84%]'>
            <Header open={open} setOpen={setOpen}/>
            <div className={`${open && 'hidden'}`}>
                {children} {width}
            </div>
        </div>
    </div>
    </>
  )
}

export default Layout;