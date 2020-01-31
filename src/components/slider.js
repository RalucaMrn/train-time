import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import BigImg from './../assets/png/rectangle-879.png'
import SmallImg from './../assets/svg/Rectangle-880.svg'
import Flickity from 'flickity-fullscreen';
import '../../node_modules/flickity/dist/flickity.css'

let carousel

function initCarousel(elem) {
  carousel = new Flickity(elem, {
    contain: true,
    imagesLoaded: true,
    pageDots: false,
    fullscreen: true
  });
}

function createImageDivs(urls) {
  const images = []
  for (var i = 0; i <= urls.length - 1; i++) {
    images.push(<div className="carousel-cell" key={i}><img src={urls[i]} /></div>)
  }
  return images
}

function createImageNav(urls) {
  const images = []
  for (var i = 0; i <= urls.length - 1; i++) {
    images.push(<div className="carousel-cell" value={i} onClick={selectImage} key={i}><img src={urls[i]} /></div>)
  }
  return images
}

function selectImage(event) {
  const index = event.currentTarget.getAttribute('value')
  carousel.select(index)
}

export default function Slider(props) {
  const carouselDiv = React.createRef();
  
  useEffect(() => initCarousel(carouselDiv.current))

  const styles = {
    height: 531,
    width: '100%',
    flex: 1,
  }

  return (
    <div>
      <Container style={{display: 'flex'}}>
        <div style={styles} ref={carouselDiv}>
          {createImageDivs(props.images)}
        </div>
        <div className="carousel-nav">
          {createImageNav(props.images)}
        </div>
      </Container>
    </div>
  )
}


