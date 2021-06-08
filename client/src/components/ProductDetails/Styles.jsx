import React from 'react';
import styled from 'styled-components';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const StyleCircle = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
  border: 1px;
  border-radius: 50px;
`;

const StyleThumbnailCheckmark = styled.div`
`;

function Styles(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log('Styles thumbnail is clicked!');
  }
  const thumbnails = props.images.map((style) =>
    <StyleCircle src={style.photos.thumbnail_url} onClick={handleClick}/>
  );
  return (
    <>
    {thumbnails}
    </>
  );
}

export default Styles;