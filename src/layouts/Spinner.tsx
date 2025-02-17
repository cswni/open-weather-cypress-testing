import React from 'react';
import '../assets/css/Spinner.css';

const Spinner = () => {
  return (
    <div className="lds-ripple" role="status" aria-live="polite">
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;

