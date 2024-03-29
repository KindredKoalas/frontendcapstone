import React, { useState } from 'react';
import styled from 'styled-components';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const StyleCircle = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  padding: 5%;
  margin: 10%;
  width: 60px;
  height: 60px;
  border: 1px;
  border-radius: 50px;
  position: relative;
`;

function Styles(props) {
  let [currentThumbnail, setCurrentThumbnail] = useState(0);

  function getIndex(styleId) {
    // purpose: this function iterates through the array and finds the index of the selected style id
    let imagesArray = props.images;
    let clickedIndex = 0;
    for (let i = 0; i < imagesArray.length; i++) {
      const photosPerStyle = imagesArray[i];
      if (styleId === photosPerStyle.style_id) {
        clickedIndex = i;
      }
    }
    return clickedIndex;
  }

  function handleClick(e) {
    e.persist();
    props.handleStylesSelectorClick(Number(e.target.attributes.value.value));
    const clickedStyleId = Number(e.target.attributes.value.value);
    const newIndex = getIndex(clickedStyleId);
    setCurrentThumbnail(newIndex);
  }

  const imagesForAllStyles = props.images;
  const renderedThumbnails = [];
  for (let i = 0; i < imagesForAllStyles.length; i++) {
    const currentStyle = imagesForAllStyles[i];
    if (currentThumbnail === i) {
      renderedThumbnails.push(
      <div className="container">
        <StyleCircle className="StyleCircle" src={currentStyle.photos.thumbnail_url} value={currentStyle.style_id} onClick={handleClick}>
          <CheckCircleIcon style={{
            'color': 'rgb(76 76 76)',
            'background-color': 'white',
            'border': '2px',
            'border-radius': '50px',
            'position': 'absolute',
            'bottom': '0',
            'right': '0',
          }}/>
        </StyleCircle>
      </div>
      )
    } else {
      renderedThumbnails.push(
        <div className="container">
          <StyleCircle src={currentStyle.photos.thumbnail_url} value={currentStyle.style_id} onClick={handleClick}>
          </StyleCircle>
        </div>
      )
    }
  };

  return (
    <>
    {renderedThumbnails}
    </>
  );
}

export default Styles;