import React from 'react';
import '../styles/Donate.css';

const Donate = () => (
  <div id="donation-panel">
    <form className="donation-panel__form row">
      <div className="column all-8">
        <label htmlFor="donation" className="donation-panel__label--small">
          Donate to this project
          <input id="donation" type="number" placeholder="£" />
        </label>
      </div>
      <div className="column all-4">
        <button className="btn btn-medium btn-primary-dark" type="submit">
          Donate
        </button>
      </div>
    </form>
  </div>
);

export default Donate;
