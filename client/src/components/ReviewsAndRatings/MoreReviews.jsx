/* eslint-disable no-else-return */
import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-weight: bold;
width: 150px;
height: 55px;
background-color: white;
border-width: thin;
margin-right: 10px;
cursor: pointer;
transition: 0.3s;
&:hover ${Button} {
  background: #C50000;
  color: white;
  border: none;
}
`;

function MoreReviews({
  reviewList, slicedReviewsFunction, slicedReviews, resetCountState, resetCount,
}) {
  const [count, setCount] = useState(4);

  function showMoreReviews() {
    if (resetCountState === true) {
      setCount(4);
      resetCount(false);
    } else {
      setCount(count + 2);
      const slicedarray = reviewList.slice(0, count);
      slicedReviewsFunction(slicedarray);
    }
  }
  if (reviewList.length !== slicedReviews.length) {
    return (
      <Button onClick={showMoreReviews}>MORE REVIEWS</Button>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return null;
  }
}

export default MoreReviews;
