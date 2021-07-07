import React from 'react';
import './section.scss';

const Section = (props) => {
  return (
    <section className="container section">
      <div className="row">
        <div className="col">
          {props.children}
        </div>
      </div>
    </section>
  )
}

export default Section
