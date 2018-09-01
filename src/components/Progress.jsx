import React from 'react';
import ProgressBar from './ProgessBar';
import propTypes from './sharedPropTypes';
import '../styles/Progress.css';

const Progress = ({ raised, target }) => (
  <div>
    <ProgressBar raised={raised} target={target} />
    <div className="row">
      <div className="column all-6">
        <p>Raised so far</p>
        <h3 className="progress__money">£{raised}</h3>
      </div>
      <div className="column all-6">
        <p>Target</p>
        <h3 className="progress__money">£{target}</h3>
      </div>
    </div>
  </div>
);

Progress.propTypes = propTypes;

export default Progress;
