/* eslint-disable no-else-return */
import React from 'react';

function Comfort(props) {
  if (props.characteristics.Comfort !== undefined) {
    return (
      <props.styles.lineSpacing>
        <label>
          <props.styles.title>Comfort</props.styles.title>
          <props.styles.slider
            type="range"
            min="1"
            max="5"
            value={props.characteristics.Comfort.value}
            readOnly
            step="0.01"
          />
        </label>
        <props.styles.text>
          <props.styles.labels>Poor</props.styles.labels>
          <props.styles.labels>Perfect</props.styles.labels>
        </props.styles.text>
      </props.styles.lineSpacing>
    );
  } else {
    return null;
  }
}

export default Comfort;
