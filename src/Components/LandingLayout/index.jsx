import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const LandingLayout = ({children, children2}) => {
  return (
    <>
    <Navbar/>
    <div>
    {children}
    </div>
    <Footer/>
    </>
  )
}

export default LandingLayout
