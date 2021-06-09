import React from 'react';

function Size(props) {
  if (props.characteristics.Size !== undefined) {
    return (
      <div>
        <props.styles.title>Size</props.styles.title>
        <props.styles.slider
          type="range"
          min="1"
          max="5"
          value={props.characteristics.Size.value}
          readonly="readonly"
          step="0.01"
        />
        <props.styles.text>
          <props.styles.labels>Too small</props.styles.labels>
          <props.styles.labels>Perfect</props.styles.labels>
          <props.styles.labels>Too large</props.styles.labels>
        </props.styles.text>
      </div>
    );
  } else {
    return null;
  }
}

export default Size;
