import React from 'react';
import './projects.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import other components
import Slider from "react-slick";
import CardImage from '../card-image/card-image';
import SlickArrow from './slick-arrow/slick-arrow';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SlickArrow reverse={false} />,
    prevArrow: <SlickArrow reverse={true} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="projects">
      <div className="projects__slick-container">
        <Slider {...settings}>
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
        </Slider>
      </div>
    </div>
  );
}

export default Projects
