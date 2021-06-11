import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Text = styled.div`
display: flex;
font-size: 2vw;
font-weight: bold;
padding-bottom: 2vw;
`;

const Dropdown = styled.select`
background: transparent;
line-height: 1;
font-size: 2vw;
font-weight: bold;
font-family: "Times New Roman", Times, serif;
border: 0;
padding: 0;
border-radius: 0;
width: 20%;
position: relative;
`;

function SortReviews({totalNumReviews, sort, sortStateChanged, resetCount}) {
  function getSelectValue() {
    let selectedValue = document.getElementById('list').value;
    sort(selectedValue);
    sortStateChanged(true);
    resetCount(true);
  }

  return (
    <Text>
      {totalNumReviews}
      &nbsp;reviews, sorted by&nbsp;
      <Dropdown id='list' onChange={getSelectValue}>
        <option value="relevant">relevance</option>
        <option value="newest">newest</option>
        <option value="helpful">helpfulness</option>
      </Dropdown>
    </Text>
  );
}

export default SortReviews;
