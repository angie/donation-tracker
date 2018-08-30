import React from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = () => (
  <div className="row">
    <div className="column all-12">
      <progress value="50" max="100" />
    </div>
  </div>
);

export default ProgressBar;
