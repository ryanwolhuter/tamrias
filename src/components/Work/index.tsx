import React from 'react';
import Carousel from 'nuka-carousel';
import './Work.scss';

const ChevronLeft = () => (
  <svg width="30" height="49" viewBox="0 0 30 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5.7575L24.2915 0L0 24.5L24.2915 49L30 43.2425L11.4575 24.5L30 5.7575Z" fill="white" />
  </svg>
)

const ChevronRight = () => (
  <svg width="30" height="49" viewBox="0 0 30 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.7085 0L0 5.7575L18.5425 24.5L0 43.2425L5.7085 49L30 24.5L5.7085 0Z" fill="white" />
  </svg>
)

export default function Work() {
  return (
    <section id="work">
      <div className="work-container">
        <Carousel
          framePadding='60px'
          heightMode='max'
          renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide}><ChevronLeft/></button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide}><ChevronRight/></button>
          )}
        >
          <div className="slide">
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
          <div className="slide">
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
          <div className="slide">
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
          <div className="slide">
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
        </Carousel>
      </div>
    </section>
  );
}