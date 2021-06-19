import React from 'react';

function Length(props) {
  if (props.characteristics.Length !== undefined) {
    return (
      <props.styles.lineSpacing>
        <label>
          <props.styles.title>Length</props.styles.title>
          <props.styles.slider
            type="range"
            min="1"
            max="5"
            value={props.characteristics.Length.value}
            readOnly
            step="0.01"
          />
        </label>
        <props.styles.text>
          <props.styles.labels>Runs short</props.styles.labels>
          <props.styles.labels>Perfect</props.styles.labels>
          <props.styles.labels>Runs long</props.styles.labels>
        </props.styles.text>
      </props.styles.lineSpacing>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return null;
  }
}

export default Length;
