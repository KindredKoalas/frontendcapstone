import React from 'react';
import styled from 'styled-components';
import Size from './CharacteristicsReview/Size.jsx';
import Width from './CharacteristicsReview/Width.jsx';
import Comfort from './CharacteristicsReview/Comfort.jsx';
import Quality from './CharacteristicsReview/Quality.jsx';
import Length from './CharacteristicsReview/Length.jsx';
import Fit from './CharacteristicsReview/Fit.jsx';

const Label = styled.label`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: column;
font-size: 1vw;
padding: 0 2vw 0 0;
`;

const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const Header = styled.span`
font-size: 1.25vw;
`;

const styles = {
  label: Label,
  row: Row,
  header: Header,
};

function CharacteristicsReview( {characteristics} ) {
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

export default CharacteristicsReview;
