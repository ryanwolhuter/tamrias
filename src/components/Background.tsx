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
  }, []);

  function updateWidthAndHeight() {
    setWidth(document.documentElement.clientWidth);
    setHeight(document.documentElement.scrollHeight);
  }
  
  return (
    <Particles
      width={`${width}px`}
      height={`${height}px`}
      className='background'
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'top',
            random: true,
            straight: true,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: false,
              },
              resize: true
            },
          },
          retina_detect: true
        }
      }}
    />
  );
}