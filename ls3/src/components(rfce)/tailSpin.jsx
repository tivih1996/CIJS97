import React, { useEffect, useState } from 'react';
import './App.css';
import { TailSpin } from 'react-loader-spinner';
function TailSpin() {
	return (
    <div className="loading-spinner">
      <TailSpin
        height="80"
        width="80"
        color="#00BFFF"
        ariaLabel="loading"
      />
    </div>
  );
}

export default TailSpin;
