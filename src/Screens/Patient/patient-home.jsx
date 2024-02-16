import React from 'react'
import { useParams } from 'react-router-dom';
import LandingLayout from '../../Components/LandingLayout';
import { LoadData } from '../../actions/patient';
import PatientTable from '../../Components/Tables/PatientTable';

const PatientHome = () => {
  
  const {id} = useParams();
  
  
  const { loading, healthRecord} = LoadData(id)

  return (
    <LandingLayout>
    <div>
      <div className='flex justify-center my-4'> 
      <span className='text-3xl font-semibold'>Patient Health Record</span>
      </div>

      <PatientTable data={healthRecord} loading={loading}/>
    </div>

    </LandingLayout>
    
  )
}

export default PatientHome