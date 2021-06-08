import React from 'react';
import styled from 'styled-components';

class Comfort extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.characteristics.Comfort !== undefined) {
      return (
        <div>
          <br></br>
          <this.props.styles.title>Comfort</this.props.styles.title>
            <this.props.styles.slider type="range" min="1" max="5" value={this.props.characteristics.Comfort.value} readonly="readonly
            " className="slider"></this.props.styles.slider>
            <this.props.styles.text>
              <label>Poor</label>
              <label>Perfect</label>
            </this.props.styles.text>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default Comfort;
