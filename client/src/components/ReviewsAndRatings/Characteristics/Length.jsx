import React from 'react';

function Length(props) {
  if (props.characteristics.Length !== undefined) {
    return (
      <div>
        <props.styles.title>Length</props.styles.title>
        <props.styles.slider
          type="range"
          min="1"
          max="5"
          value={props.characteristics.Length.value}
          readonly="readonly"
          step="0.01"
        />
        <props.styles.text>
          <props.styles.labels>Runs short</props.styles.labels>
          <props.styles.labels>Perfect</props.styles.labels>
          <props.styles.labels>Runs long</props.styles.labels>
        </props.styles.text>
      </div>
    );
  } else {
    return null;
  }
}

export default Length;
