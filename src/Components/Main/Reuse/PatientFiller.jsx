import React from 'react'
import TxtDisplay from '../../UI/TxtDisplay'
import PatientTable from '../../Tables/PatientTable'

const PatientFiller = ({list, admin, health, loading}) => {

  return (
    <>
    {loading? "loading...":
     <div>
        <div>
            <TxtDisplay value={list?.fullname}  label={"FullName"}/>
            <TxtDisplay value={list?.fathername} label={"FatherName"}/>
            <TxtDisplay value={list?.email} label={"Email"}/>
            <TxtDisplay value={list?.gender} label={"Gender"}/>
            <TxtDisplay value={list?.phone} label={"Phone"}/>
            <TxtDisplay value={admin?.name} label={"Created By"}/>
        </div>

        <div>
         {health && !(health && health.length > 0)? "No Record History" :
         <PatientTable data={health} loading={loading} icon={"noicon"}/>
         }
        </div>

        </div>}
    </>
  )
}

export default PatientFiller