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
          <this.props.styles.title>Width</this.props.styles.title>
            <this.props.styles.slider type="range" min="1" max="5" value={this.props.characteristics.Width.value} readonly="readonly"></this.props.styles.slider>
            <this.props.styles.text>
              <this.props.styles.labels>Too narrow</this.props.styles.labels>
              <this.props.styles.labels>Perfect</this.props.styles.labels>
              <this.props.styles.labels>Too wide</this.props.styles.labels>
            </this.props.styles.text>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default Width;
