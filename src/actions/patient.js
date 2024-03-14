
import axios from "axios";
import { useCallback, useEffect } from "react";
import { useState } from "react"
import { _AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";



export const LoadData = (id)=>{
const [auth] = _AuthContext();
const authToken = auth && auth?.token

const [data, setData] = useState("")
const [healthRecord, setHealthRecord] = useState([])
const [loading, setLoading] = useState(false);

    const loadUser = useCallback(async () =>{
        setLoading(true);
    try {
        if(id){
        const res = await axios.get(`patient/load-user/${id}`)
        setHealthRecord(res.data.healthRecord);
        setData(res.data)}
    } catch (error) {
      toast.error("Error in loading");
    }finally{
        setLoading(false);
    }
},[id])

useEffect(()=>{
    if(authToken){
        loadUser();
    }
},[authToken, loadUser]);

return { data, healthRecord, loading}
}


export const Updation = ()=>{
    const [password, setPassword] = useState({currentPassword:"", newPassword:""})
    const [loading, setLoading] = useState(false);
    
    const changeHandler = (e) => {
        setPassword({ ...password, [e.target.name]: e.target.value });
      };  

    const updatePassword = async () =>{
            setLoading(true);
        try {
            const res = await axios.put('patient/update-password',password);
          toast.success("Password Updated Successfully.")
        } catch (error) {
            if(error.response.status === 400){
                toast.error("Current Password is incorrect.");
            }
        }finally{
            setLoading(false);
        }
    }
    
    return { updatePassword, loading, changeHandler }
    }