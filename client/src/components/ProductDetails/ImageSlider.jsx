import React, {useState} from 'react';
import styled from 'styled-components';
import { dummyPhotos } from './dummySamples.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const ImageSliderInner = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
`;

const ImageSliderLeft = styled.div`
  flex: 5%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
  color: white;
  cursor: pointer;
`;

// const ArrowRight = styled.div`
//   width: 0;
//   height: 0;
//   border-top: 10px solid transparent;
//   border-bottom: 10px solid transparent;
//   border-left: 10px solid grey;
// `;

const ImageSliderCenter = styled.div`
  flex: 80%;
  height: 100%;
`;

const ImageSliderRight = styled.div`
  flex: 5%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
  color: white;
  cursor: pointer;
`;

function ImageSlider(props) {

  const [currentImage, setCurrentImage] = useState(0);

  console.log('dummyPhotos', dummyPhotos);
  return (
    <ImageSliderInner style={{backgroundImage: `url(${dummyPhotos[currentImage].url})`}}>
      <ImageSliderLeft onClick={() => {
        currentImage > 0 && setCurrentImage(currentImage - 1);
        }}
      >
        <ArrowBackIosIcon />
      </ImageSliderLeft>
      <ImageSliderCenter />
      <ImageSliderRight onClick={() => {
        currentImage < dummyPhotos.length - 1 && setCurrentImage(currentImage + 1);
        }}>
        <ArrowForwardIosIcon />
      </ImageSliderRight>
    </ImageSliderInner>
  );
}

export default ImageSlider;