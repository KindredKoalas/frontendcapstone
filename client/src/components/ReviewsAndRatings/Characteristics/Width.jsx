import React from 'react';

function Width(props) {
  if (props.characteristics.Width !== undefined) {
    return (
      <div>
        <props.styles.title>Width</props.styles.title>
        <props.styles.slider
          type="range"
          min="1"
          max="5"
          value={props.characteristics.Width.value}
          readonly="readonly"
          step="0.01"
        />
        <props.styles.text>
          <props.styles.labels>Too narrow</props.styles.labels>
          <props.styles.labels>Perfect</props.styles.labels>
          <props.styles.labels>Too wide</props.styles.labels>
        </props.styles.text>
      </div>
    );
  } else {
    return null;
  }
}

export default Width;
