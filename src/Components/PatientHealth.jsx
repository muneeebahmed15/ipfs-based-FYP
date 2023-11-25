import React from 'react'
import txtbox from './UI/txtbox'
import { patientdata } from '../Data/patientdata'
import { json } from 'react-router-dom'

const PatientHealth = () => {
  return (
    <>
let x = patientdata.map(x);

 <div className="overflow-x-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
<txtbox/>
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Name
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
         Age
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          City
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Cnic
        </th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    {patientdata.map((x)=>(
      // x.healthdata.map((x)=>{
  
    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {x.date}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{x.doctorname}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{x.problem}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{x.suggested}</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>
    </tbody>
    // })
    ))}
     {JSON.stringify(x.healthdata)}
  </table>
</div>
    </>
  )
}

export default PatientHealth