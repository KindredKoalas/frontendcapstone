/* eslint-disable no-else-return */
import React from 'react';

function Fit(props) {
  if (props.characteristics.Fit !== undefined) {
    return (
      <props.styles.lineSpacing>
        <label>
          <props.styles.title>Fit</props.styles.title>
          <props.styles.slider
            type="range"
            min="1"
            max="5"
            value={props.characteristics.Fit.value}
            readOnly
            step="0.01"
          />
        </label>
        <props.styles.text>
          <props.styles.labels>Runs tight</props.styles.labels>
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

export default Fit;
