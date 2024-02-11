import React from 'react'
import PatientTable from './PatientTable'
import Navbar from '../../Components/Navbar'



const PatientRecord = () => {

    // const [time,setTime] = useState(new Date())

  return (
    <>
    <Navbar/>
    <div className="max-w-screen-xl px-4  my-5 text-gray-600 md:px-8">
      <div className="max-w-lg mx-auto space-y-3 sm:text-center">
          <h1 className="text-indigo-600 text-4xl font-semibold">
            Doctor Registration Form
            <br />
          </h1>
        </div>
        <div className='hidden md:block'>
         <div className="flex flex-col items-center gap-y-5 gap-x-4 px-3 my-4 [&>*]:w-full sm:flex-row">
              <div>
                <input
                  type="text"
                  required
                  name='username'
                  value="Muneeb Ahmed"
                  // value={userInfo.username}
                  // onChange={handleChange}
                //   placeholder="Enter username here..."
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
              <div>
                <input
                  name="fathername"
                  type="text"
                  value="Waheed Ahmed"
                  // value={userInfo.password}
                  // onChange={handleChange}
                //   placeholder="Enter password here..."
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
              <div>
                <input
                  name="username"
                  type="username"
                  value="muneeb.ahmed"
                  // value={userInfo.password}
                  // onChange={handleChange}
                //   placeholder="Enter password here..."
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
              <div>
                <input
                  name="cnic"
                  type="text"
                  value="12345678910"
                  // value={userInfo.password}
                  // onChange={handleChange}
                //   placeholder="Enter password here..."
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-y-5 gap-x-4 my-2 px-3 [&>*]:w-full sm:flex-row">
              <div>
                <input
                  type="email"
                  required
                  name='email'
                  value="muneeb@gmail.com"
                  // value={userInfo.username}
                  // onChange={handleChange}
                //   placeholder="Enter username here..."
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
              <div>
                <input
                  name="city"
                  type="text"
                  value="Sialkot"
                  // value={userInfo.password}
                  // onChange={handleChange}
                //   placeholder="Enter password here..."
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
              <div>
                <input
                  name="male"
                  type="text"
                  value="Male"
                  // value={userInfo.password}
                  // onChange={handleChange}
                //   placeholder="Enter password here..."
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
              <div>
                <input
                  name="DOB"
                  type="text"
                  value="12/12/23"
                  // value={userInfo.password}
                  // onChange={handleChange}
                //   placeholder="Enter password here..."
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
            </div>
            </div>
            </div>
            <div>
                <PatientTable/>
            </div>
    </>
  )
}

export default PatientRecord