import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../Assets'

const Navbar = () => {
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white  md:mb-0">
      <img src={logo} alt="" className="w-30 h-20 text-white p-2 "/>
      <span className="ml-3 text-xl">MedRec</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 hover:text-white">Home</Link>
      <Link to="/about" className="mr-5 hover:text-white">About</Link>
      <Link to="/mission" className="mr-5 hover:text-white">Mission</Link>
      <Link to="/contact" className="mr-5 hover:text-white">Contact</Link>
    </nav>
    <Link to="/login"><button className="inline-flex items-center bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 rounded text-base">Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </Link> 
  </div>
</header>
    </>
  )
}

export default Navbar
