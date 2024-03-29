import React from 'react';
import Picture from './Picture.jsx';

function PictureList(props) {
  if (props.pictureList.length > 0) {
    const pictures = props.pictureList;
    const picturesList = pictures.map((picture) => (
      <Picture
        key={picture.id}
        pictureObject={picture}
      />
    ));
    return (
      <div>
        {picturesList}
      </div>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return null;
  }
}

export default PictureList;
