import React from 'react'
import { patientdata } from '../Data/patientdata'

import txtbox from './UI/txtbox'

const Patientform = () => {
  return (
    <>
      
 {/* {JSON.stringify(patientdata)} */}

{patientdata.map((x)=>(
    <main className="mb-5">
        <div className="max-w-screen-xl  px-4 text-black-600 md:px-8">
            <div className="mt-5 max-w-lg ">
                <form className="space-y-5" >
                    <div className="flex flex-col gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                        <div>
                            <label className="font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                value={x.name}
                                className="w-full mt-2 px-3 py-2 text-black-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                               Age
                            </label>
                            <input
                                type="text"
                                required
                                value={x.age}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            value={x.email}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
    

                    <div>
                        <label className="font-medium">
                            Username
                        </label>
                        <input
                            type="text"
                            required
                            value={x.username}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                </form>
            </div>
        </div>
    </main>
))}
    </>
  )
}

export default Patientform
