import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ 
    user: null, 
    token: "",
 });

  useEffect(()=>{
    let data=localStorage.getItem("auth");
    if(data){
        setAuth(JSON.parse(data));
    }
  },[]);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
    
      {children}
    </AuthContext.Provider>
  );
};
