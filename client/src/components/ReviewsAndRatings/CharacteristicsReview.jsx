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
padding: 0 2vw 0 0;
font-size: 12px;
font-weight: lighter;
`;

const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const Header = styled.span`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: column;
margin-top: 2%;
`;

const styles = {
  label: Label,
  row: Row,
  header: Header,
};

function CharacteristicsReview({ characteristics, setCharacteristicsObj, characteristicsObj }) {
  return (
    <>
      <Size
        characteristics={characteristics}
        styles={styles}
        setCharacteristicsObj={setCharacteristicsObj}
        characteristicsObj={characteristicsObj}
      />
      <Width
        characteristics={characteristics}
        styles={styles}
        setCharacteristicsObj={setCharacteristicsObj}
        characteristicsObj={characteristicsObj}
      />
      <Comfort
        characteristics={characteristics}
        styles={styles}
        setCharacteristicsObj={setCharacteristicsObj}
        characteristicsObj={characteristicsObj}
      />
      <Quality
        characteristics={characteristics}
        styles={styles}
        setCharacteristicsObj={setCharacteristicsObj}
        characteristicsObj={characteristicsObj}
      />
      <Length
        characteristics={characteristics}
        styles={styles}
        setCharacteristicsObj={setCharacteristicsObj}
        characteristicsObj={characteristicsObj}
      />
      <Fit
        characteristics={characteristics}
        styles={styles}
        setCharacteristicsObj={setCharacteristicsObj}
        characteristicsObj={characteristicsObj}
      />
    </>
  );
}

export default CharacteristicsReview;
