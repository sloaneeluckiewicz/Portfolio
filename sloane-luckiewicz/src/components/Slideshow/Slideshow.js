import React from 'react';
import { Slide } from 'react-slideshow-image';
import styles from './styles.module.css';


const slideImages = [
  'sloane-luckiewicz/src/images/arthur1.PNG',
  'sloane-luckiewicz/src/images/arthur2.PNG',
  'sloane-luckiewicz/src/images/ham_bird.jpeg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

export const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className={styles.eachSlide}>
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className={styles.eachSlide}>
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className={styles.eachSlide}>
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    )
}