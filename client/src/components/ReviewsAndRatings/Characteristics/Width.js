import React from 'react';
import styled from 'styled-components';

class Width extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.characteristics.Width !== undefined) {
      return (
        <div>
          <br></br>
          <this.props.styles.title>Width</this.props.styles.title>
            <this.props.styles.slider type="range" min="1" max="5" value={this.props.characteristics.Width.value} readonly="readonly"></this.props.styles.slider>
            <this.props.styles.text>
              <label>Too narrow</label>
              <label>Perfect</label>
              <label>Too wide</label>
            </this.props.styles.text>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default Width;
