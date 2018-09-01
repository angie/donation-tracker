import React from 'react';
import ProgressBar from './ProgessBar';
import '../styles/Progress.css';

const Progress = () => (
  <div>
    <ProgressBar />
    <div className="row">
      <div className="column all-6">
        <p>Raised so far</p>
        <h3 className="progress__money">£200</h3>
      </div>
      <div className="column all-6">
        <p>Target</p>
        <h3 className="progress__money">£200</h3>
      </div>
    </div>
  </div>
);

export default Progress;
