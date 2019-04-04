import React from 'react';
import './Music.scss';
import './BandcampPlayer';
import BandcampPlayer from './BandcampPlayer';

export default function Music() {
  return (
    <section id="music">
      <div className="music-container">
        <div className="description">
          <h1>New Leaf</h1>

          <p>Tamrias is a classically-trained 
            electro-acoustic musician and producer 
            currently based in Cape Town, 
            South Africa.</p>

          <p>Her debut album, titled 'New Leaf' is a deep, 
            reflective expedition into the unknown.</p>

          <p>Swirling, cinematic sound-design techniques 
            and cut-up glitch-esque electronics swim amidst
            colourful composition, with sampled loops and 
            naturally occurring soundscapes.</p>

          <p><small>Released January 18, 2018</small></p>

          <p><small>Mastered by Levi Thole</small></p>
        </div>
        <BandcampPlayer />
      </div>
    </section>
  );
}