import React, { useEffect, useState } from 'react';
import './cardPokemon/card.css';
import { TailSpin } from 'react-loader-spinner';

function tailSpin() {
	return (
    <div >
      <TailSpin
        height="80"
        width="80"
        color="#00BFFF"
        ariaLabel="loading"
      />
    </div>
  );
}

export default tailSpin
