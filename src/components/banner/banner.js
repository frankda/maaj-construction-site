import React from 'react'
import './banner.scss'
import Tilt from './assets/tilt.svg';

const Banner = () => {
  return (
    <>
      <div className="banner container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="banner__content">
                <h1 className="banner__content-title">We build your dream</h1>
                <p className="banner__content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nobis rem necessitatibus perferendis sint facilis numquam excepturi, beatae iste, officia amet aut fugit cupiditate sapiente obcaecati magni eum blanditiis architecto.</p>
                <button className="banner__content-btn">Button</button>
              </div>
            </div>
            <div className="offset-md-1 col-md-6">
              <div className="banner__img-block">
                <div className="banner__img">
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="banner__tilt-divider" src={Tilt} alt="" />
      </div>
    </>
    )
  }

export default Banner
