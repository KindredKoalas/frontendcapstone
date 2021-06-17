import styled from 'styled-components';
import React from 'react';

const Text = styled.div`
display: flex;
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-size: 18px;
font-weight: bold;
padding-bottom: 2vw;
`;

const Dropdown = styled.select`
background: transparent;
line-height: 1;
font-size: 18px;
font-weight: bold;
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
border: 0;
padding: 0;
border-radius: 0;
width: 40%;
position: relative;
`;

function SortReviews(
  {
    totalNumReviews, sort, sortStateChanged, resetCount
  },
) {
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
