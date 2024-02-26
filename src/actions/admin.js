import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { _AuthContext } from "../Context/AuthContext";


export const RegisterData = ( url ) =>{
    const[loading, setLoading] = useState();
    const[data, setData] = useState({
        role:"patient",
        fullname:"",
        fathername:"",
        CNIC:"",
        DOB:"",
        email:"",
        phone:"",
        gender:"",
        username:"",
        password:""
    });
 
    const changeHandler = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const registerUser = async () =>{
        setLoading(true);
        try {
            const res = await axios.post(url,data);
            if(res.status === 200){
                toast.success("Patient registered successfully");
                setData({
                    role:"",
                fullname:"",
                fathername:"",
                CNIC:"",
                DOB:"",
                email:"",
                phone:"",
                gender:"",
                username:"",
                password:""})
            }
        } catch (error) {
            if(error.response.status === 400){
                toast.error("All fields are manadatory");
            }
           else if(error.response.status === 409){
                toast.error("Patient already registered");
            }else{
                toast.error("Data is not valid");
            }
        }finally{
            setLoading(false);
        }
    }

    return { loading, registerUser, data, changeHandler}

}

export const PatientHealth = ( id ) =>{
  const [auth] = _AuthContext();
  const authToken = auth && auth?.token;
  const [ loading, setLoading ] = useState(false);
  const [ list, setList ] = useState([]);

  const loadHealth = async () =>{
    setLoading(true);
    try {
        const res = await axios.get(`patient/get-health-record/${id}`)
        setList(res.data.healthinfo);

    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false);
    }
  }

  useEffect(()=>{
        if(authToken){
            loadHealth();
        }
  },[authToken])

  return { loading, list }
}