

import React from 'react'
import { background1, background2 } from '../../../Assets'
import LandingLayout from '../../LandingLayout'
import { Link } from 'react-router-dom'
import { about } from '../../../Assets'


const Carousel = () => {
  return (
    <LandingLayout>

    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={background1} className="d-block w-100" alt="..." style={{height:'450px'}}/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={background2} className="d-block w-100" alt="..." style={{height:'450px'}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

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
      <img className="object-cover object-center rounded" alt="hero" src={about}/>
    </div>
  </div>
</section>

    </LandingLayout>
  )
}

export default Carousel