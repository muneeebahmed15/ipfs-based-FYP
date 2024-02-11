import { useContext, useState } from 'react'
import { logo } from '../../Assets'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'

const DoctorNavbar = () => {
const [auth, setAuth] = useContext(AuthContext)
const navigate = useNavigate();
    const [state, setState] = useState(false)

  const handleChange = () =>{
      setAuth({user:null, token:""});
      navigate('/doctor-login');
      }

    return (
        <nav className="bg-gray-900 border-b w-full ">
            <div className="items-center flex justify-between px-4 max-w-screen-xl mx-auto">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    
                        <img
                            src={logo}
                            width={80}
                            alt="Float UI logo"
                        />
                    
                </div> 
                <div className='flex'> 
                <div> <Link to="/doctor-information">  <button className="block py-3 px-3 mx-2 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow ">
           Profile
      </button>  </Link></div>

   <div> <Link to="/doctor-login">  <button onClick={handleChange} className="block py-3 px-3 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow ">
           Logout
      </button>  </Link></div> 
      </div>   
            </div>
        </nav> 
    )
}


export default DoctorNavbar
