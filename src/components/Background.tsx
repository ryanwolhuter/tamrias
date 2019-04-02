import React, { useState, useEffect } from 'react';
import Particles from 'react-particles-js';

import './Background.scss';

export function Background() {
  const [width, setWidth] = 
    useState(document.documentElement.clientWidth);
  const [height, setHeight] = 
    useState(document.documentElement.scrollHeight);

  useEffect(() => {
    document.addEventListener('resize', updateWidthAndHeight);
    return document.removeEventListener('resize', updateWidthAndHeight);
  }, [width, height]);

  function updateWidthAndHeight() {
    setWidth(document.documentElement.clientWidth);
    setHeight(document.documentElement.scrollHeight);
  }
  
  return (
    <Particles
      width={`${width}px`}
      height={`${height}px`}
      className='background'
    />
  );
}