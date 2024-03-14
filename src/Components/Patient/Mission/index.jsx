

import React from 'react'
import { about } from '../../../Assets'
import LandingLayout from '../../LandingLayout'

const Mission = () => {
  return (
    <LandingLayout>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={about}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-right mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Mission
      </h1>
      <p className="mb-8 leading-relaxed">The mission of this web application is to revolutionize healthcare information management by providing patients with easy access to their records, empowering doctors with comprehensive insights for personalized care, and enabling administrators to maintain a secure and efficient system for patient registration and data management. By fostering transparency, collaboration, and accessibility, the application aims to enhance the overall quality of healthcare delivery and promote a patient-centric approach in medical practices.</p>
      <div className="flex justify-center">
        </div>
    </div>
  </div>
</section>
    </LandingLayout>
  )
}

export default Mission