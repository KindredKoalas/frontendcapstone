import React from 'react';

const Photo = ({ photo }) => (
  <div>
    <img src={photo} alt="thumbnails" width="100" height="75"></img>
  </div>
)

export default Photo;