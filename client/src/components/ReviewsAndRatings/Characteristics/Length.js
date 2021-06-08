import React from 'react';
import styled from 'styled-components';

class Length extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    if(this.props.characteristics.Length !== undefined) {
      return (
        <div>
          <br></br>
          <this.props.styles.title>Length</this.props.styles.title>
            <this.props.styles.slider type="range" min="1" max="5" value={this.props.characteristics.Length.value} readonly="readonly"></this.props.styles.slider>
            <this.props.styles.text>
              <label>Runs short</label>
              <label>Perfect</label>
              <label>Runs long</label>
            </this.props.styles.text>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default Length;
