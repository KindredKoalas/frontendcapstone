import React from 'react';

function Size(props) {
  if (props.characteristics.Size !== undefined) {
    return (
      <props.styles.lineSpacing>
        <props.styles.title>Size</props.styles.title>
        <props.styles.slider
          type="range"
          min="1"
          max="5"
          value={props.characteristics.Size.value}
          readOnly
          step="0.01"
        />
        <props.styles.text>
          <props.styles.labels>Too small</props.styles.labels>
          <props.styles.labels>Perfect</props.styles.labels>
          <props.styles.labels>Too large</props.styles.labels>
        </props.styles.text>
      </props.styles.lineSpacing>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return null;
  }
}

export default Size;
