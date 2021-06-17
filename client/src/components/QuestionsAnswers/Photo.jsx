import React from 'react';
import styled from 'styled-components';

const PhotoStyle = styled.span`
padding-right: 1vw;
`;

const Photo = ({ photo }) => (
  <PhotoStyle>
    <img src={photo} alt="thumbnails" width="100" height="75"></img>
  </PhotoStyle>
)

export default Photo;