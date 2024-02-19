import axios from "axios";
import { useState } from "react"
import { _AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

 export const SubmitData = (url) =>{
 const [auth, setAuth] = _AuthContext();
 const router = useNavigate();

    const [loading, setLoading] = useState(false);
    const [formdata, setformdata] = useState({CNIC: "1234567890",email:"", password: "", });
    const [user, setUser] = useState("");

   

      const changeHandler = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
      };

        const loginUser = async()=>{
            setLoading(true);
            try {
                const res = await axios.post(url,formdata);
                    // console.log(res)
                if(res.status === 200){
                    toast.success("Login Successfull");
                    setAuth(res.data);
                    Cookies.set("auth", JSON.stringify(res.data));
            }

            } catch (error) {
                if(error.response.status === 401){
                   toast.error("Invalid Credentials.")
                }else if(error.response.status === 404){
                    toast.error("User not found.");
                 }else if(error.response.status === 400){
                    toast.error("All fields are required.");
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
            // router(url || "/patient-login")
        }

        

        return {loading,
            changeHandler,
             setformdata,
             formdata,
              loginUser,
              logoutUser,
            }
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