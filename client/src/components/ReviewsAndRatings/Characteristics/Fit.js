import React from 'react';
import styled from 'styled-components';

class Fit extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    if(this.props.characteristics.Fit !== undefined) {
      return (
        <div>
          <this.props.styles.title>Fit</this.props.styles.title>
            <this.props.styles.slider type="range" min="1" max="5" value={this.props.characteristics.Fit.value} readonly="readonly"></this.props.styles.slider>
            <this.props.styles.text>
              <this.props.styles.labels>Runs tight</this.props.styles.labels>
              <this.props.styles.labels>Perfect</this.props.styles.labels>
              <this.props.styles.labels>Runs long</this.props.styles.labels>
            </this.props.styles.text>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default Fit;
