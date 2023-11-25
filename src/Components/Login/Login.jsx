import React, { useState } from "react";
import { logo } from "../../Assets";



const initValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [formdata, setformdata] = useState(initValues);

  const changeHandler = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const submitFunction = async (e) => {
    e.preventDefault();
};


  
    

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
               value={formdata.email}
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
               value={formdata.password}
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

export default Login;
