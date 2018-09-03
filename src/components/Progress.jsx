import React from 'react';
import ProgressBar from './ProgessBar';
import propTypes from './sharedPropTypes';
import '../styles/Progress.css';

const Progress = ({ raised, target }) => (
  <div>
    <ProgressBar raised={raised} target={target} />
    <div className="row">
      <div className="column all-6">
        Raised so far
        <h3>£{raised}</h3>
      </div>
      <div className="column all-6">
        Target
        <h3>£{target}</h3>
      </div>
    </div>
  </div>
);

Progress.propTypes = propTypes;

export default Progress;
