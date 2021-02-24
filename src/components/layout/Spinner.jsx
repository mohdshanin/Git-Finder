import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      height: '100vh',
    }}
  >
    <img
      src={spinner}
      alt="Loading..."
      style={{
        position: 'relative',
        top: '0',
        left: '0',
        width: ' 200px',
        display: 'block',
        margin: 'auto',
      }}
    />
  </div>
);

export default Spinner;
