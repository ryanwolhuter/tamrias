import React from 'react';
import Carousel from 'nuka-carousel';
import BandcampPlayer from './BandcampPlayer';
import VimeoPlayer from './VimeoPlayer';
import './Music.scss';

export default function Music() {
  return (
    <section id="music">
      <div className="music-container">
        <Carousel>
          <article>
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
          </article>
                  
          <article>
            <div className='description'>
              <h1>The Cave</h1>

              <p>"The first time working with Tamrias, 
                  we found some really cool beads in the studio 
                  and tried sampling them and found we could make a really 
                  creepy sounding background which reminded us both a lot of a cave.</p>
                
              <p>From there she put down an impromptu piano part 
                 and we had a friend come in and record some melodic lines 
                 and extended techniques on viola. </p>
                
              <p>I did most of the processing and sound design to bring our cave to life.</p>                
                
              <p><small> - Angus Teeton</small></p>
            </div>
            <VimeoPlayer/>
          </article>
        </Carousel>
      </div>
    </section>
  );
}
