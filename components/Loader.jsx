import React from 'react';

import loading from './../assets/loading.gif';

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={loading} alt="Loading" />
      <p className="loading-text">Aguarde...</p>
    </div>
  );
};

export default Loader;
