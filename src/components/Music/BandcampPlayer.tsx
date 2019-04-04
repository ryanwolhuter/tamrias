import React from 'react';
import { usePageDimensions } from '../../PageDimensionsProvider';

export default function BandcampPlayer() {
  const { width } = usePageDimensions();
  
  if (width < 768) {
    return <SmallPlayer/>
  }
  else if (width >= 768 && width <= 1024) {
    return <MediumPlayer/>
  }
  else {
    return <LargePlayer/>
  }
}

function SmallPlayer() {
  return (
    <div className='bandcamp-container'>
      <iframe
        style={{ border: 0, width: '100%', height: '42px' }}
        src="https://bandcamp.com/EmbeddedPlayer/album=2323951329/size=small/bgcol=333333/linkcol=ffffff/transparent=true/" seamless>
        <a href="http://moonswingnetlabel.bandcamp.com/album/new-leaf">
          New Leaf by Tamrias
          </a>
      </iframe>
    </div>
  )
}

function MediumPlayer() {
  return (
    <div className='bandcamp-container'>
      <iframe
        style={{ border: 0, width: '100%', height: '120px' }}
        src="https://bandcamp.com/EmbeddedPlayer/album=2323951329/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
        seamless>
        <a href="http://moonswingnetlabel.bandcamp.com/album/new-leaf">
          New Leaf by Tamrias
        </a>
      </iframe>
    </div>
  );
}

function LargePlayer() {
  return (
    <div className='bandcamp-container'>
      <iframe
        style={{ border: 0, width: '350px', height: '470px' }}
        src="https://bandcamp.com/EmbeddedPlayer/album=2323951329/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/" seamless>
        <a href="http://moonswingnetlabel.bandcamp.com/album/new-leaf">
          New Leaf by Tamrias
      </a>
      </iframe>
    </div>
  );
}