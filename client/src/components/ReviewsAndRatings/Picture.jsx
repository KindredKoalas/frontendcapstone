import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
width: 100px;
height: 100px;
padding: 0 1vw 0 0;
`;

function Picture({ pictureObject }) {
  return (
    <>
      <a target="_blank" href={pictureObject.url}>
        <Image src={pictureObject.url} alt="product image" />
      </a>
    </>
  );
}

export default Picture;
