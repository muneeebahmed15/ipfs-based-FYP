import React, { useContext, useEffect, useState } from "react";
import { logo } from "../../Assets";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";



const initValue = {
  email: "",
  password: "",
};

const DoctorLogin = () => {
  const [ auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginCredential, setLoginCredential] = useState(initValue);

  const changeHandler = (e) => {
    setLoginCredential({ ...loginCredential, [e.target.name]: e.target.value });
  };

  const submitFunction = async (e) => {
    e.preventDefault();

    // console.log(loginCredential)

    try {
      const response = await axios.post("http://localhost:8000/api/doctor/login",loginCredential);
      console.log(response);
      const {data} = response.data;
      // alert(data.messgae);
      // const doctorAccessToken = response.data.data.doctorAccessToken;
      // console.log(data);
      // console.log(data.loginDoctor, data.doctorAccessToken)
     

      setAuth({user: data.loginDoctor, token: data.doctorAccessToken});
      //  console.log(auth);
      //  console.log(data);

       localStorage.setItem("auth", JSON.stringify (data))
      //  navigate("/admin/dashboard")
     } 
     catch (error)
      {
      
      console.log("error from submitHandle", error)
    }
};

useEffect(()=>{
  if(auth && auth?.token){
    navigate('/doctor')
    //'/admin/dashboard'
  } //redirect if have token
},[auth]); //dependencies

  
    

  return (
    <>
      <main className="w-full h-full flex flex-col items-center justify-center border py-4">
        <div className="max-w-sm w-full text-gray-600">
          <div className="text-center">
            <img src={logo} width={150} className="mx-auto" alt="/" />
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Log in to your account
              </h3>
             </div>
          </div>
          <form className="mt-8 space-y-5" onSubmit={submitFunction}>
            <div>
              <label className="font-medium">Email</label>
              <input
              placeholder="Enter email here..."
               value={loginCredential.email}
               name="email"
               onChange={changeHandler}
               type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
              placeholder="Enter password here..."
               value={loginCredential.password}
               name="password"
               onChange={changeHandler}
               type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button type="submit" 
              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              Sign in
            </button>
            <div className="text-center">
              <a href="/" className="hover:text-indigo-600">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default DoctorLogin;
