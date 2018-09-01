import React from 'react';
import Progress from './Progress';
import Donate from './Donate';
import '../styles/Card.css';

const Card = props => (
  <article className="Card card column all-12">
    <div className="card__content">
      <p className="card__title">
        <b>Help refugees rebuild their lives and communities in Manchester</b>
      </p>
      <p>Manchester Refugee Support Network (MSRN)</p>
      <Progress {...props} />
      <Donate />
      <footer className="card__footer">
        <a href="/">Learn more about causes local to you</a>
      </footer>
    </div>
  </article>
);

export default Card;
