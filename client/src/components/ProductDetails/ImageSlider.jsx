import React, {useState} from 'react';
import styled from 'styled-components';
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

const ImageGalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 5%;
`;

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
  let imagesPerStyle = props.selectedImages;
  let [currentImage, setCurrentImage] = useState(0);
  let [currentThumbnail, setCurrentThumbnail] = useState(0);

  return (
    <ImageSliderInner style={{backgroundImage: `url(${imagesPerStyle[currentImage].url})`}}>
      <ImageSliderLeft onClick={() => {
        currentImage > 0 && setCurrentImage(currentImage - 1);
        }}
      >
        <ArrowBackIosIcon />
      </ImageSliderLeft>
      <ImageSliderCenter />
      <ImageSliderRight onClick={() => {
        currentImage < imagesPerStyle.length - 1 && setCurrentImage(currentImage + 1);
        }}>
        <ArrowForwardIosIcon />
      </ImageSliderRight>
    </ImageSliderInner>
  );
}

export default ImageSlider;