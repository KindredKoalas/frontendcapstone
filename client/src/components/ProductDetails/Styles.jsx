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

function Styles(props) {
  console.log('Styles.jsx is running');
  const thumbnails = props.images.map((style) =>
    <StyleCircle src={style.photos.thumbnail_url}/>
  );
  return (
    <>
    {thumbnails}
    </>
  );
}

export default Styles;