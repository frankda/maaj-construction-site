import React from 'react';
import './projects.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import other components
import Slider from "react-slick";
import CardImage from '../card-image/card-image';
import SlickArrow from './slick-arrow/slick-arrow';

// import assets
import ColesModal1 from '@images/projects/marsden-park-coles/modal1.jpg';
import ColesModal2 from '@images/projects/marsden-park-coles/modal2.jpg';
import ColesModal3 from '@images/projects/marsden-park-coles/modal3.jpg';
import Cover1 from '@images/projects/marsden-park-coles/cover1.jpg';

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

  const colesImages = [ColesModal1, ColesModal2, ColesModal3];

  return (
    <div className="projects">
      <div className="projects__slick-container">
        <Slider {...settings}>
          <CardImage cover={'https://i.nextmedia.com.au/News/CRN_14_coles_stock.jpg'} images={colesImages} />
          <CardImage cover={'https://gopray.com.au/wp-prod/wp-content/uploads/2020/07/DIA-720x340.jpeg'} images={colesImages} />
          <CardImage cover={'https://www.ahstatic.com/photos/8787_ho_00_p_1024x768.jpg'} images={colesImages} />
          <CardImage cover={'https://www.crownsydney.com.au/getmedia/64d3a247-22e0-45ff-8618-a52db2d416e7/191120-Crown-Sydney-General-Property-Building-Form-2880x1648.jpg'} images={colesImages} />
        </Slider>
      </div>
    </div>
  );
}

export default Projects
