import React, { useContext, useState } from "react";
import { sidenavs } from "./sidenav";
import { BiUser } from "react-icons/bi";
import { logo } from "../../Assets/index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();
 const pathname = useLocation().pathname;


//  console.log(auth)

const Clicks = (x) => {
   if(x.name !== 'Logout'){
    setActive(x)
   }
   else{
    // console.log(auth);
    setAuth({user: null, token:""});
    // console.log(auth); 
      navigate("/admin");
    // let ok = window.confirm("Are you sure, you want to logout?");
    // if(ok){
      
    // }
   }
}

  return (
    <>
      <div
        className={`bg-sidebar-color h-min-screen  hidden md:block w-[16%] sticky top-0 h-screen`}
      >
        <div className="py-5">
          <img
            src={logo}
            alt="logo"
            width={70}
            height={30}
            className="mx-auto mb-5"
          />

          <div
            className={`flex justify-start items-center mt-3 gap-3 px-3 cursor-pointer text-gray-300 font-bold`}
          >
            <BiUser /> <span>Muneeb Ahmed</span>
          </div>

          {sidenavs.map((x) => {
            return (
              <Link
                to={x.link}
                key={x.name}
                onClick={()=>Clicks(x)}
                className={`${x.className} flex justify-start items-center mt-3 gap-3 px-3 cursor-pointer   ${
                  pathname === x.link ? "text-active-color pb-2 border-r-4 border-active-color font-bold" : " text-gray-400 hover:text-[#fcc30e]"
                }`}
              >
                {x.icon} <span>{x.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
