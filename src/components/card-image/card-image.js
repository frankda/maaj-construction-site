import React from 'react';
import './card-image.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardImage = () => {
  return (
    <div className="card-image" style={{backgroundImage: 'url("https://picsum.photos/500/400")'}}>
      <div className="card-image__overlay"></div>
      <div className="card-image__content">
        <h4 className="card-image__title">name</h4>
        <div className="card-image__description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minus quasi fugiat odit fugit, eos dicta eius optio obcaecati veritatis magnam consequatur, alias, esse in repudiandae tempora animi voluptas corporis!</p>
        </div>
        <a className="card-image__cta" href="#">Take a look<FontAwesomeIcon className="card-image__cta-icon" icon="chevron-right" /></a>
      </div>
    </div>
  )
}

export default CardImage;
