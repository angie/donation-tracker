import React from 'react';
import propTypes from './sharedPropTypes';

const ProgressBar = ({ raised, target }) => (
  <div className="row">
    <div className="column all-12">
      <progress value={raised} max={target} />
    </div>
  </div>
);

ProgressBar.propTypes = propTypes;

export default ProgressBar;
