import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Text = styled.div`
display: flex;
font-size: 2.75vw;
font-weight: bold;
`;

function SortReviews(props) {

  function sorting() {
    console.log('sorting');
    props.sort('newest');
  };

  return (
    <Text>{props.totalNumReviews} reviews, sorted by
      <button onClick={sorting} value="newest">ClickMe</button>
    </Text>
  );
}

export default SortReviews;