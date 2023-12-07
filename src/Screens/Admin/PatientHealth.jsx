import React,{useState} from 'react'
import Layout from '../../Components/Admin/Layout'
import axios from 'axios';


const PatientHealth = () => {
  const [time, setTime] = useState(new Date());
    const [userInfo, setUserInfo] = useState({
    fullname : "",
    fathername : "",
    CNIC : "",
    DOB : "",
    email : "",
    gender : "",
    phone : "",
    username : "",
    password : ""
  });


  const handleChange =(e) =>{
    setUserInfo({...userInfo,[e.target.name]:e.target.value});
  }


const submitHandle = async (e) =>{
  e.preventDefault();
  console.log(userInfo);
  try {
    const response = await axios.post('link', userInfo);
    console.log(response.data)
    // console.log("Patient registered: ",response.data);
} catch (err) {
    console.log('Error creating patient info:', err.response.data );// Log the detailed error message
    // console.log('Axios error:', err);
}
// setUserInfo({
//   fullname : "",
//   fathername : "",
//   CNIC : "",
//   DOB : "",
//   email : "",
//   gender : "",
//   phone : "",
//   username : "",
//   password : ""
// })
}

  return (
    <Layout>
    <main className="py-3">
      <div className="max-w-screen-xl px-4 text-gray-600 md:px-8">
        <div className="max-w-lg space-y-3 sm:text-center">
          <h1 className="text-indigo-600 text-4xl font-semibold">
            Patient Health Data Form
            
      View created at {time.toLocaleTimeString()}
          </h1>
        </div>
        <div className="mt-6 max-w-lg">
          <form onSubmit={submitHandle} className="space-y-5">
            <div className="flex flex-col gap-y-5 gap-x-6 w-full sm:flex-row">
              <div>
                <label className="font-medium">Full Name</label>
                <input
                  type="text"
                  required
                  name="fullname"
                  onChange={handleChange}
                  value={userInfo.fullname}
                  placeholder="Enter name here..."
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
              <div>
                <label className="font-medium">Father Name</label>
                <input
                  type="text"
                  required
                  name="fathername"
                  onChange={handleChange}
                  value={userInfo.fathername}
                  placeholder="Enter father name here..."
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">CNIC</label>
                <input
                  type="text"
                  required
                  name="CNIC"
                  onChange={handleChange}
                  value={userInfo.CNIC}
                  placeholder="Enter CNIC here..."
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
              <div>
                <label className="font-medium">Date of Birth</label>
                <input
                  type="date"
                  required
                  name="DOB"
                  onChange={handleChange}
                  value={userInfo.DOB}
                  placeholder=""
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                name="email"
                onChange={handleChange}
                value={userInfo.email}
                placeholder="Enter email here..."
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
            </div>
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label
                  for="countries"
                  className="block mb-2 font-medium font-medium text-gray-600"
                >
                  Select an option
                </label>
                <select
                  id="countries"
                  name="gender"
                  onChange={handleChange}
                  value={userInfo.gender}
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                >
                  <option selected>Choose Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="font-medium">Phone number</label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                      <option>PAK</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="+92 000 000000"
                    required
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleChange}
                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">Username</label>
                <input
                  type="text"
                  required
                  name="username"
                  value={userInfo.username}
                  onChange={handleChange}
                  placeholder="Enter username here..."
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
              <div>
                <label className="font-medium">Password</label>
                <input
                  name="password"
                  type="password"
                  value={userInfo.password}
                  onChange={handleChange}
                  placeholder="Enter password here..."
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
            </div>
            <button type="submit" className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
   
    </Layout>
  )
}

export default PatientHealth


