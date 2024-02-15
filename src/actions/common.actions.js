import axios from "axios";
import { useState } from "react"
import { _AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

 export const SubmitData = (url) =>{
 const [auth, setAuth] = _AuthContext();

    const [loading, setLoading] = useState(false);
    const [formdata, setformdata] = useState({CNIC: "1234567890", password: "patientB..", });

      const changeHandler = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
      };


        const loginUser = async()=>{
            setLoading(true);
            try {
                const res = await axios.post(url,formdata);
                    // console.log(res.data.user)
                if(res.status === 200){
                    toast.success("Login Successfull");
                    setAuth(res.data);
                    Cookies.set("auth", JSON.stringify(res.data));
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
            Cookies.remove("auth");
            setAuth({user: null, token: ""})
        }

        

        return {loading,changeHandler, setformdata,formdata, loginUser,logoutUser}
 }

//  export const GettingPatient = ()=>{
//    const {auth} = _AuthContext();
//    const authToken = auth && auth?.token;

//     const [loading, setLoading] = useState(false);
//     const [data, setData] = useState({})

//     // console.log(auth.token);

//     const currentPatient = async ()=>{
//     setLoading(true);
//     try {
//         const res = await axios.get("patient/current",{
//             headers: {
//               Authorization: `Bearer ${authToken}`,
//             }});
//         console.log(res)
//         setData(res.data)
//         }
//      catch (error) {
//        console.log(error);
//     }finally{
//         setLoading(false)
//     }
// }

// useEffect(()=>{
//     if(authToken){
//         currentPatient();
//     }
// },[authToken])

// return {data, loading, currentPatient}
// }