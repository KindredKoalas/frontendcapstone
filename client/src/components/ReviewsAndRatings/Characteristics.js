import React from 'react';
import styled from 'styled-components';
import Size from './Characteristics/Size.js';
import Width from './Characteristics/Width.js';
import Comfort from './Characteristics/Comfort.js';
import Quality from './Characteristics/Quality.js';
import Length from './Characteristics/Length.js';
import Fit from './Characteristics/Fit.js';

const Slider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
`;

const Title = styled.div`
display: flex;
font-size: 13px;
font-weight: bold;
`;

const Text = styled.div`
display: flex;
justify-content: space-between;
font-size: 10px;
`;

const styles = {
  title: Title,
  text: Text,
  slider: Slider
}

class Characteristics extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
      return (
        <>
        <Size characteristics={this.props.characteristics} styles={styles}/>
        <Width characteristics={this.props.characteristics} styles={styles}/>
        <Comfort characteristics={this.props.characteristics} styles={styles}/>
        <Quality characteristics={this.props.characteristics} styles={styles}/>
        <Length characteristics={this.props.characteristics} styles={styles}/>
        <Fit characteristics={this.props.characteristics} styles={styles}/>
        </>
      );
  }
};

export default Characteristics;