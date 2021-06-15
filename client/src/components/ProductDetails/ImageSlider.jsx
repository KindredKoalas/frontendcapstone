import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';

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

const ImageSliderCenter = styled.div`
  flex: 80%;
  height: 100%;
  position: relative;
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

const ThumbnailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 5%;
  border: thin;
  color: white;
`;

const ImageGalleryGrid = styled.div`
  display: grid;
  height: 400px;
  grid-template-columns: 1fr;
  padding: 5%;
  border: thin;
  color: white;
  overflow-y: scroll;
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

const ThumbnailHighlight = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  padding: 5%;
  margin: 10%;
  width: 50px;
  height: 50px;
  border-bottom: solid 5px white;
  position: relative;
`;

const ModalCircleGrey = styled.div`
  height: 9px;
  width: 9px;
  background-color: #bbb;
  border: thin solid #bbb;
  border-radius: 50%;
  display: inline-block;
`;
const ModalCircleGreyOutline = styled.div`
  height: 9px;
  width: 9px;
  background-color: white;
  border: thin solid #bbb;
  border-radius: 50%;
  display: inline-block;
`;

const ModalSliderInner = styled.figure`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  overflow: hidden;
  cursor: zoom-in;
  transition: transform 0.25s ease;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

function ImageSlider(props) {
  let imagesPerStyle = props.selectedImages;
  let [currentImage, setCurrentImage] = useState(0);
  let [modalIsOpen, setModalIsOpen] = useState(false);

  // let thumbnails = imagesPerStyle.map((image, index) =>
  //   <ThumbnailSquare src={image.thumbnail_url} onClick={() => {
  //     setCurrentImage(index)
  //   }}/>
  // );

  // let thumbnails = [];
  // for (var i = 0; i < imagesPerStyle.length; i++) {
  //   let image = imagesPerStyle[i];
  //   if (currentImage === i) {
  //     thumbnails.push(
  //       <ThumbnailHighlight src={image.thumbnail_url} />
  //     )
  //   } else {
  //     thumbnails.push(
  //       <ThumbnailSquare src={image.thumbnail_url} onClick={() => {
  //         console.log('i', i);
  //         const j = i;
  //         console.log('j', j);
  //         setCurrentImage(i)
  //       }}/>
  //     )
  //   }
  // }

  let thumbnails = imagesPerStyle.map((image, index) => {
    if (currentImage === index) {
      return <ThumbnailHighlight src={image.thumbnail_url}></ThumbnailHighlight>
    } else {
      return <ThumbnailSquare src={image.thumbnail_url} onClick={() => {
        setCurrentImage(index)
      }}/>
    }
  });

  let scrollDots = imagesPerStyle.map((image, index) => {
    if (currentImage === index) {
      return <ModalCircleGreyOutline />
    } else {
      return <ModalCircleGrey onClick={() => {
        setCurrentImage(index)
      }}/>
    }
  });

  console.log('currentImage', currentImage);
  let leftSliderArrow;
  if (currentImage > 0) {
    leftSliderArrow = <ImageSliderLeft onClick={() => {
      currentImage > 0 && setCurrentImage(currentImage - 1);
      }}>
      <ArrowBackIcon />
    </ImageSliderLeft>
  };

  let rightSliderArrow;
  if (currentImage < imagesPerStyle.length - 1) {
    rightSliderArrow = <ImageSliderRight onClick={() => {
      currentImage < imagesPerStyle.length - 1 && setCurrentImage(currentImage + 1);
      }}>
      <ArrowForwardIcon />
    </ImageSliderRight>
  };

  return (
    <ImageSliderInner style={{backgroundImage: `url(${imagesPerStyle[currentImage].url})`}}>
      {leftSliderArrow}

      <ThumbnailWrapper>
        <ArrowDropUpIcon />
        <ImageGalleryGrid>
          {thumbnails}
        </ImageGalleryGrid>
        <ArrowDropDownIcon onClick={() => {
        }} />
      </ThumbnailWrapper>
      <ImageSliderCenter>
        <AspectRatioIcon style={{
          position: "absolute",
          top: 5,
          right: 5
        }} onClick={() => setModalIsOpen(true)}/>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
              <ModalSliderInner style={{backgroundImage: `url(${imagesPerStyle[currentImage].url})`}}>
              <ImageSliderLeft onClick={() => {
                  currentImage > 0 && setCurrentImage(currentImage - 1);
              }}>
              <ArrowBackIcon />
              </ImageSliderLeft>
              <ImageSliderCenter />
              <ImageSliderRight onClick={() => {
                currentImage < imagesPerStyle.length - 1 && setCurrentImage(currentImage + 1);
              }}>
              <ArrowForwardIcon />
              </ImageSliderRight>
              </ModalSliderInner>
            <div>
              {scrollDots}
            </div>
          </Modal>

      </ImageSliderCenter>
      {rightSliderArrow}
    </ImageSliderInner>
  );
}

export default ImageSlider;