import axios from "axios";
import { useState } from "react"
import { _AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

 export const SubmitData = (url) =>{
 const [auth, setAuth] = _AuthContext();
    const [loading, setLoading] = useState(false);
    const [formdata, setformdata] = useState({
        CNIC: "1234567890",
        password: "patientB..",
      });

      const changeHandler = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
      };

        const loginUser = async()=>{
            setLoading(true);
            try {
                const res = await axios.post(url,formdata);

                if(res.status === 200){
                    toast.success("Login Successfull");
                    setAuth(res.data);
                    Cookies.set("auth", JSON.stringify(res.data))
            }

            } catch (error) {
                if(error.response.status === 401){
                   toast.error("Password or CNIC is incorrect.")
                }else if(error.response.status === 404){
                    toast.error("User not found.");
                 }else{
                    toast.error("Internal server error");
                 }
              
            }finally{
                setLoading(false)
            }

        }

        const logoutUser = ()=>{
                setAuth({user: null, token: ""})
                Cookies.remove("auth");
        }

        return {loading,changeHandler, setformdata, formdata, loginUser}
 }