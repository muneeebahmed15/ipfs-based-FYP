import { useEffect, useState } from "react";
import { logo } from "../../Assets";
import { SubmitData } from "../../actions/common.actions";
import { _AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const MainLogin = () => {
 const [auth] = _AuthContext();
 const authToken = auth && auth?.token;

 const router = useNavigate();

  const [user, setUser] = useState("doctor");
const { loginUser, formdata, changeHandler, loading} = SubmitData(user ==="admin"? "users/login" :  "doctor/login" );

const checkUser = (e)=>{
  setUser(e.target.value);
}

useEffect(()=>{
    if(authToken){
      if(user === "doctor"){
      router("/doctor")}
    }else if(user === "admin"){
      router("/")
    }else{router("/main-login")}
},[authToken, user, router])



  return (
    <>
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="flex flex-col justify-center items-center border-2 rounded w-80 py-3">
        <div>
          <img src={logo} width={80} alt="" />
        </div>
        <div className="text-4xl font-semibold pt-3">
          <span>Login</span>
        </div>
        <div className="mt-2" >
            <div>
              <label className="font-medium">Email</label>
              <input
               value={formdata.email}
               name="email"
               onChange={changeHandler}
               type="email"
               placeholder="Email"
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

            <div className="flex justify-end">
              <div className="mr-2">
            <input type="radio" name="abc" checked={user === "doctor"} value={"doctor"} onChange={checkUser}/>
          <label for="html">Doctor</label>
          </div>
          <div>
        <input type="radio" name="abc" value={"admin"} checked={user === "admin"} onChange={checkUser}/>
        <label for="html">Admin</label><br/>
        </div>
            </div>

           <button type="submit" 
              className="w-full px-4 py-2 mt-3 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            onClick={loginUser}
            >
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

export default MainLogin;
