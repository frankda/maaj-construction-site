import React from 'react';
import './section.scss';

const Section = (props) => {
  return (
    <section className="container section">
      {props.children}
    </section>
  )
}

export default Section
