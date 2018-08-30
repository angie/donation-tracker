import React from 'react';
import ProgressBar from './ProgessBar';
import '../styles/Card.css';

const Card = () => (
  <article className="Card card column all-12">
    <div className="card__content">
      <h2 className="card__title">
        Help refugees rebuild their lives and communities in Manchester
      </h2>
      <p>Manchester Refugee Support Network (MSRN)</p>
      <ProgressBar />
    </div>
  </article>
);

export default Card;
