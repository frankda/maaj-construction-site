import React from 'react';
import './card-icon.scss';

// import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardIcon = (props) => {
  return (
    <div className="card-icon">
      <FontAwesomeIcon className="card-icon__icon" icon={props.icon} />
      <h6 className="card-icon__title">{props.title}</h6>
      <p className="card-icon__description">{props.description}</p>
    </div>
  )
}

export default CardIcon;
