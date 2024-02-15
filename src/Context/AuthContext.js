import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const _AuthContext =()=> useContext(AuthContext); 

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    { 
    user: null, 
    token: "",
 });

 useEffect(()=>{
  let user =  Cookies.get("auth"); 
 
  if(user){
      setAuth(JSON.parse(user))
  }
},[])


  axios.defaults.baseURL = "http://localhost:5000";
  // axios.defaults.headers.common["Cookies"] = auth.token;
  axios.defaults.headers.common["Authorization"] = `Bearer ${auth.token}`;

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
