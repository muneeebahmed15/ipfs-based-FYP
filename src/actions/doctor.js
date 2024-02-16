import axios from "axios";
import { useEffect, useState } from "react"
import { _AuthContext } from "../Context/AuthContext";


export const LoadData = ()=>{
    const [auth] = _AuthContext();
    const authToken = auth && auth?.token;

   const [loading, setLoading] = useState(false);
   const [list, setList] = useState([]);


   const loadPatients = async ()=>{
    setLoading(true);
   try {
    const res = await axios.get("/patient/get-all-patients");
    console.log(res);
    setList(res.data);
   } catch (error) {
    console.log(error)
   }finally{
    setLoading(false);
   }
}

useEffect(()=>{
    if(authToken){
        loadPatients();
    }
},[authToken])


   return {loading, loadPatients, list}
}