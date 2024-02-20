import axios from "axios";
import { useState } from "react"


export const RegisterData = ( url ) =>{
    const[loading, setLoading] = useState();
    const[data, setData] = useState({
        role:"",
        fullname:"",
        fathername:"",
        CNIC:"",
        DOB:"",
        email:"",
        phone:"",
        gender:"",
        username:"",
        password:"",
        admin_id:""
    });
 
    const changeHandler = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    console.log(data);

    const registerUser = async () =>{
        setLoading(true);
        try {
            const res = await axios.post(url,data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return { loading, registerUser, data, changeHandler}

}