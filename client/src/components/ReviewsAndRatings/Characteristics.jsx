import React from 'react';
import styled from 'styled-components';
import Size from './Characteristics/Size.jsx';
import Width from './Characteristics/Width.jsx';
import Comfort from './Characteristics/Comfort.jsx';
import Quality from './Characteristics/Quality.jsx';
import Length from './Characteristics/Length.jsx';
import Fit from './Characteristics/Fit.jsx';

const Slider = styled.input`
  -webkit-appearance: none;
  column-count: 3;
  appearance: none;
  width: 100%;
  height: 4px;
  background: #eee;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;

  &::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid black;
  background: none;
  cursor: pointer;
}
`;

const Title = styled.div`
display: flex;
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-size: 14px;
font-weight: 100;
`;

const Text = styled.div`
display: flex;
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
justify-content: space-between;
font-size: 11px;
font-weight: 100;
`;

const Labels = styled.label`
display: flex;
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-size: 11px;
font-weight: 100;
`;

const LineSpacing = styled.div`
padding-bottom: 12px;
`;

const styles = {
  title: Title,
  text: Text,
  slider: Slider,
  labels: Labels,
  lineSpacing: LineSpacing,
};

function Characteristics( {characteristics} ) {
  return (
    <>
      <Size characteristics={characteristics} styles={styles} />
      <Width characteristics={characteristics} styles={styles} />
      <Comfort characteristics={characteristics} styles={styles} />
      <Quality characteristics={characteristics} styles={styles} />
      <Length characteristics={characteristics} styles={styles} />
      <Fit characteristics={characteristics} styles={styles} />
    </>
  );
}

export default Characteristics;
