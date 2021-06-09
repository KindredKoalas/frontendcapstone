import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const StyleCircle = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
  border: 1px;
  border-radius: 50px;
  z-index: 1;
  position: relative;
`;

const CheckmarkCircle = styled.div`
  color: rgb(76 76 76);
  background-color: white;
  border: 2px;
  border-radius: 50px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

function Styles(props) {
  function handleClick(e) {
    props.handleStylesSelectorClick(e.target.attributes.value.value);
  }
  // first thumbnail always has checkmark
  // if thumbnail is clicked, render image with checkmark
    // remove checkmark from previously clicked thumbnail
  const thumbnails = props.images.map((style) =>
    <div className="container">
      <StyleCircle src={style.photos.thumbnail_url} data-value={style.style_id} onClick={handleClick}>
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
  );
  return (
    <>
    {thumbnails}
    </>
  );
}

export default Styles;