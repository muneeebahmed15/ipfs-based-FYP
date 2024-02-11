import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { sidenavs } from './sidenav'


const Header = ({open, setOpen}) => {
    const [active, setActive] = useState("");
    const pathname = useLocation().pathname;

    const Clicks = (x) =>{
        if(x.name !== "Logout"){
            setActive(x)
        }
        else{
            let ok = window.confirm("Are you sure, you want to logout?");
        }
    }


  return (
    <>
   <nav className="bg-gray-500 w-ful block md:hidden ">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                   <Link><b>Patient Record Storage System</b></Link>
                  <div className="md:hidden">
                      <button className="text-gray-100 outline-none p-2 rounded-md "
                          onClick={() => setOpen(!open)}
                      >
                          {
                              open ? (
                                <AiOutlineClose/>
                              ) : (
                                <AiOutlineMenu/>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ open ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  {sidenavs.map((x) => {
            return (
              <Link
                to={x.link}
                key={x.name}
                onClick={()=>Clicks(x)}
                className={`${
                  x.className
                } flex justify-start items-center mt-3 gap-3 px-3 cursor-pointer hover:text-black  ${
                  pathname === x.link ? "text-gray-300 border-r-4 font-bold" : ""
                }`}
              >
                {x.icon} <span>{x.name}</span>
              </Link>
            );
          })}
                  </ul>
              </div>
          </div>
      </nav>

    </>
  )
}

export default Header