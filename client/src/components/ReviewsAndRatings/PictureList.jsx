import React from 'react';
import Picture from './Picture.jsx';

function PictureList(props) {
  if (props.pictureList.length > 0) {
    const pictures = props.pictureList;
    const picturesList = pictures.map((picture) =>
      // Wrong! The key should have been specified here:
      <Picture key={picture.id} pictureObject={picture} />
    );
    return (
      <div>
        {picturesList}
      </div>
    );
  } else {
    return null;
  }
}

export default PictureList;
