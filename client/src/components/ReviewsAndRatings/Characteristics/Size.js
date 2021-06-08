import React from 'react';
import styled from 'styled-components';

class Size extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    if(this.props.characteristics.Size !== undefined) {
      return (
        <div>
          <br></br>
          <this.props.styles.title>Size</this.props.styles.title>
            <this.props.styles.slider type="range" min="1" max="5" value={this.props.characteristics.Size.value} readonly="readonly"></this.props.styles.slider>
            <this.props.styles.text>
              <label>Too small</label>
              <label>Perfect</label>
              <label>Too large</label>
            </this.props.styles.text>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default Size;