import React from 'react';
import './banner.scss';

function Banner() {
  return (
    <div>
      <div className='banner' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/Image-source-1.png)`
      }}>
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}

export default Banner;