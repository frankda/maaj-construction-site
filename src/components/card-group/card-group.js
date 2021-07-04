import React from 'react';
import './card-group.scss';

const CardGroup = (props) => {
  const renderChildren = () => {
    // convert children to array
    let children;
    if (Array.isArray(props.children)) {
      children = props.children;
    } else {
      children = [props.children];
    }

    return (
      children.map((card, i) => {
        return (
          <div className="card-group__item col" key={i}>
            {card}
          </div>
        )
      })
    )
  }

  return (
    <div className="card-group">
      <div className="row">
        {renderChildren()}
      </div>
    </div>
  )
}

export default CardGroup;
