import React from 'react';
import styled from 'styled-components';

class Quality extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    if(this.props.characteristics.Quality !== undefined) {
      return (
        <div>
          <br></br>
          <this.props.styles.title>Quality</this.props.styles.title>
            <this.props.styles.slider type="range" min="1" max="5" value={this.props.characteristics.Quality.value} readonly="readonly"></this.props.styles.slider>
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

export default Quality;
