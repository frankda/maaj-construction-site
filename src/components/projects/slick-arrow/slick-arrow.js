import React from 'react';
import './slick-arrow.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SlickArrow = (props) => {
  const { className, style, onClick, reverse } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className="slick-arrow__content"
        icon={reverse ? 'chevron-left' : 'chevron-right'}
      />
    </div>
  );
}

export default SlickArrow;
