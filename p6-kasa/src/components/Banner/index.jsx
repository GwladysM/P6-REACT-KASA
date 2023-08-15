import React from 'react';
import './banner.scss';

function Banner() {
  return (
    <div className='banner__text' style={{
      backgroundImage: `url(./assets/Image-source-1.png)`
    }}>
      <p>Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;