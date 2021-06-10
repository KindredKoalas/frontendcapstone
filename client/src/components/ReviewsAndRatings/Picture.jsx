import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
width: 8vw;
height: 8vw;
padding: 0 1vw 0 0;
`;

function Picture({ pictureObject }) {
  return (
    <>
      <a href={pictureObject.url}>
        <Image src={pictureObject.url} />
      </a>
    </>
  );
}

export default Picture;
