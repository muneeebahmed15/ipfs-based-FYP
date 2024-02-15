import React from 'react'
import { background1, background2 } from '../../Assets'
import LandingLayout from '../LandingLayout'

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
    </LandingLayout>
  )
}

export default Carousel