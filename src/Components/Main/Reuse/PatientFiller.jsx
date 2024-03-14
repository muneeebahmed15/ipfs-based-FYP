import React from 'react'
import TxtDisplay from '../../UI/TxtDisplay'
import PatientTable from '../../Tables/PatientTable'
import Loading from '../../UI/Loading'

const PatientFiller = ({list, admin, health, loading, from}) => {

  return (
    <>
    {loading ? <Loading loading={loading}/>: list ?
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
         {health &&
         <PatientTable data={health} loading={loading} from={from} />
         }
        </div>

        </div> : ""}
    </>
  )
}

export default PatientFiller