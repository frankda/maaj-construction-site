import React from 'react';
import './card-image.scss';

const CardImage = () => {
  return (
    <div className="card-image" style={{backgroundImage: 'url("https://picsum.photos/500/400")'}}>
      <div className="card-image__overlay"></div>
      <div className="card-image__content">
        <h4 className="card-image__title">name</h4>
        <p className="card-image__description"></p>
        <a className="card-image__cta" href="#">Take a look</a>
      </div>
    </div>
  )
}

export default CardImage;
