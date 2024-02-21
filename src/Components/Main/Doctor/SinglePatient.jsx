import React from 'react'
import MainLayout from '../MainLayout'
import { useParams } from 'react-router-dom'
import { LoadSinglePatient } from '../../../actions/doctor';
import PatientFiller from '../Reuse/PatientFiller';


const SinglePatient = () => {
    const {id} = useParams();
    const { loading, list} = LoadSinglePatient(id);
    const admin = list?.admin_id;
    const health = list?.healthRecord

    

  return (
    <>
        {loading? "Loading...":<>
        <PatientFiller list={list} admin={admin} health={health} loading={loading}/>
        </>
      }
    </>
  )
}

export default SinglePatient
