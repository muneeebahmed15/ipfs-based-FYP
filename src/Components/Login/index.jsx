import React from "react";
import { logo } from "../../Assets";
import { SubmitData } from "../../actions/common.actions";




const Login = () => {

  const {loading, formdata, changeHandler, loginUser} = SubmitData("/patient/login");


  

  

    
  return (
    <>
      
<div className="flex flex-col justify-center items-center my-3">
      <div className="flex flex-col justify-center items-center border-2 rounded w-80 py-3">
        <div>
          <img src={logo} width={80} alt="" />
        </div>
        <div className="text-4xl font-semibold pt-3">
          <span>Login</span>
        </div>
        <div className="mt-2" >
            <div>
              <label className="font-medium">CNIC</label>
              <input
               value={formdata.CNIC}
               name="CNIC"
               onChange={changeHandler}
               type="number"
               placeholder="CNIC"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
               value={formdata.password}
               name="password"
               onChange={changeHandler}
               type="password"
                required
                placeholder="Password"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
           <button type="submit" 
              className="w-full px-4 py-2 mt-3 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            onClick={loginUser}>
            {loading? "Loading...": "Sign in"}
            </button>
            <div className="text-center mt-2">
              <a href="/" className="hover:text-indigo-600">
                Forgot password?
              </a>
            </div>
          </div>

      </div>
      </div>

    </>
  );
};

export default Login;
