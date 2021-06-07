import React from 'react';
import styled from 'styled-components';
import dummyPhotos from './dummySamples.js';

function ImageSlider(props) {
  console.log('dummyPhotos', dummyPhotos);
  return (
    <>
      {dummyPhotos.map((slide) => {
        return <img src={slide.url} />;
      })}
    </>
  );
}

export default ImageSlider;