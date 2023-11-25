import axios from 'axios';
import React, { useState } from 'react'

const PatientLogin = () => {
    const [user, setUser] = useState({
        username: "", email :"",password:"",
    });

    const handleChange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const createLogin = async(e)=>{
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/users/signup', user);
            const { tittle,message,stackTrace } = response.data;
            if (tittle === "Validation Failed") {
                console.log("Validation Failed", message);
            } else {
                console.log("Register Successfully");
            }
        } catch (err) {
            console.log('registration error', err.response.data); // Log the detailed error message
        }
        setUser({
            username:"",email: "", password: "",
        })
    }

  return (
    <>
    <div>
        <form onSubmit={createLogin}>
        <input type="text" name="username" value={user.username} onChange={handleChange} placeholder='Enter Username here...' />
        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder='Enter Email here...' />
        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder='Enter Password here...' />
        <button type='submit'> Create Login </button>
        </form>
    </div>
    </>
  )
}

export default PatientLogin;