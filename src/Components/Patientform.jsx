import React from 'react'
import { patientdata } from '../Data/patientdata'

import txtbox from './UI/txtbox'

const Patientform = () => {
  return (
    <>
      
 {JSON.stringify(patientdata)}

{patientdata.map((x)=>(
    <main className="py-5">
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
                                className="w-full mt-2 px-3 py-2 text-black-900 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
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
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
    

<label
  for="Username"
  class="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="text"
    id="Username"
    class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
    placeholder="Username"
  />

  <span
    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
  >
    Username
  </span>
</label>
                </form>
            </div>
        </div>
    </main>
))}
    </>
  )
}

export default Patientform
