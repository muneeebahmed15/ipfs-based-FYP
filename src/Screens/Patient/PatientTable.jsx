import React, { useState } from 'react'


  

const tableItems = [
    {
        name: "Liam James",
        email: "liamjames@example.com",
        position: "Software engineer",
        salary: "$100K"
    },
    {
        name: "Olivia Emma",
        email: "oliviaemma@example.com",
        position: "Product designer",
        salary: "$90K"
    },
    {
        name: "William Benjamin",
        email: "william.benjamin@example.com",
        position: "Front-end developer",
        salary: "$80K"
    },
    {
        name: "Henry Theodore",
        email: "henrytheodore@example.com",
        position: "Laravel engineer",
        salary: "$120K"
    },
    {
        name: "Amelia Elijah",
        email: "amelia.elijah@example.com",
        position: "Open source manager",
        salary: "$75K"
    },
]
const PatientTable = () => {
    const date = new Date();
return (
    <>
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
                <thead className="bg-sky-300 text-gray-600 font-medium border-b">
                    <tr>
                        <th className="py-3 px-6">Date</th>
                        <th className="py-3 px-6">Doctor Name</th>
                        <th className="py-3 px-6">Position</th>
                        <th className="py-3 px-6">Salary</th>
                        <th className="py-3 px-6">Action</th>
                        <th className="py-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="text-black divide-y">
                    {
                        tableItems.map((item, idx) => (
                            <tr key={idx}>
                                <td className="px-6 py-4 whitespace-nowrap">{date.toLocaleDateString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                                <td className="text-center px-6 whitespace-nowrap">
                                    <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                        Download PDF
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default PatientTable
