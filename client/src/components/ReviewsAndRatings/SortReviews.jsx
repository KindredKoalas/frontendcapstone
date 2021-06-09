import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Text = styled.div`
display: flex;
font-size: 2.75vw;
font-weight: bold;
`;

const Dropdown = styled.select`
background: transparent;
line-height: 1;
font-size: 2.75vw;
font-weight: bold;
font-family: "Times New Roman", Times, serif;
border: 0;
padding: 0;
border-radius: 0;
width: 30%;
position: relative;
`;

function SortReviews(props) {
  function getSelectValue() {
    let selectedValue = document.getElementById('list').value;
    props.sort(selectedValue);
  }

  return (
    <Text>
      {props.totalNumReviews}
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
