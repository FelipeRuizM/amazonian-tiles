import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react';

export const Slider = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const BACKGROUND_DARKNESS = 0.7;

  useEffect(() => {
    let index = 0;
    for (const slide of slides) {
      document.getElementById('item-' + index++).style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${BACKGROUND_DARKNESS}), rgba(0, 0, 0, ${BACKGROUND_DARKNESS})), url(${slide.image})`;
    }
  }, [slides]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel 
      id='slider'
      activeIndex={index} 
      onSelect={handleSelect} 
      nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}>
      {slides.map((slide, index) => (
        <Carousel.Item key={'item-'+index} id={'item-'+index} interval={slide.interval}>
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}