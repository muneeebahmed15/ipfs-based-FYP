import React, { useState } from 'react'
import Layout from '../../Components/Admin/Layout';

const Dashboard = () => {

    const [time,setTime] = useState(new Date())

  return (
    <Layout>
      <div className="max-w-lg space-y-3 sm:text-center">
          <h1 className="text-indigo-600 text-4xl font-semibold">
            Doctor Registration Form
            {time.toLocaleTimeString()}
          </h1>
        </div>
         <div className="flex flex-col items-center gap-y-5 gap-x-6 px-3 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">Username</label>
                <input
                  type="text"
                  required
                  name="username"
                  // value={userInfo.username}
                  // onChange={handleChange}
                  placeholder="Enter username here..."
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
              <div>
                <label className="font-medium">Password</label>
                <input
                  name="password"
                  type="password"
                  // value={userInfo.password}
                  // onChange={handleChange}
                  placeholder="Enter password here..."
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
              <div>
                <label className="font-medium">Password</label>
                <input
                  name="password"
                  type="password"
                  // value={userInfo.password}
                  // onChange={handleChange}
                  placeholder="Enter password here..."
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg" />
              </div>
            </div>
    </Layout>
  )
}

export default Dashboard