import React from 'react';

function Quality(props) {
  if (props.characteristics.Quality !== undefined) {
    return (
      <props.styles.lineSpacing>
        <props.styles.title>Quality</props.styles.title>
        <props.styles.slider
          type="range"
          min="1"
          max="5"
          value={props.characteristics.Quality.value}
          readOnly
          step="0.01"
        />
        <props.styles.text>
          <props.styles.labels>Poor</props.styles.labels>
          <props.styles.labels>Perfect</props.styles.labels>
        </props.styles.text>
      </props.styles.lineSpacing>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return null;
  }
}

export default Quality;
