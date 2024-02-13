import React from 'react'
import { GettingPatient, SubmitData } from '../../actions/common.actions'
import { _AuthContext } from '../../Context/AuthContext'
import { useParams } from 'react-router-dom';

const PatientHome = () => {
 const [auth] = _AuthContext();
const {id} = useParams();
{JSON.stringify(id)}  

  return (
    <div>PatientHome - {JSON.stringify(auth.user.role)}
    </div>
  )
}

export default PatientHome