import React from 'react'

const Heading = ({icon, title}) => {
  return (
    <>
    <div className="flex justify-start items-center gap-2 mx-5 my-4" >
      <div className='p-3 bg-indigo-600 text-white rounded-full'>
        {icon}
        </div>
      <div className='flex flex-column'>
       <b className='text-indigo-600' style={{fontSize: "25px"}}>{title}</b>
      </div>
    </div>
    <hr />
    </>
  )
}

export default Heading