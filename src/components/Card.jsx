import React from 'react';
import Progress from './Progress';
import '../styles/Card.css';

const Card = () => (
  <article className="Card card column all-12">
    <div className="card__content">
      <p className="card__title">
        <b>Help refugees rebuild their lives and communities in Manchester</b>
      </p>
      <p>Manchester Refugee Support Network (MSRN)</p>
      <Progress />
    </div>
  </article>
);

export default Card;
