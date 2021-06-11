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
  border: thin;
`;

const ThumbnailSquare = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  padding: 5%;
  margin: 10%;
  width: 50px;
  height: 50px;
  position: relative;
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
  let thumbnails = imagesPerStyle.map((image) => {
    <ThumbnailSquare src={image.thumbnail_url} />;
  });
  console.log('thumbnails', thumbnails);
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
      <ImageGalleryGrid>
        {<ThumbnailSquare src={imagesPerStyle[currentImage].url}/>}
      </ImageGalleryGrid>
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