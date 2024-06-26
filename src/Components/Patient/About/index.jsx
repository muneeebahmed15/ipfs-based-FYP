

import React from 'react'
import { about } from '../../../Assets'
import { Link } from 'react-router-dom'
import LandingLayout from '../../LandingLayout'
import abc from '../../../Assets/abc.png'

const About = () => {
  return (
    <LandingLayout>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Us
       </h1>
      <p className="mb-8 leading-relaxed">This web application serves as an integrated healthcare management system, allowing patients to access their records and doctors to efficiently review and update patient information. Admins facilitate seamless registration processes, ensuring a secure and collaborative platform for streamlined healthcare interactions.</p>
      <div className="flex justify-center">
        <Link to='/about'> <button className="ml-4 inline-flex text-gray-100 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">About Us</button> </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={abc} width={100}/>
    </div>
  </div>
</section>
    </LandingLayout>
  )
}

export default About