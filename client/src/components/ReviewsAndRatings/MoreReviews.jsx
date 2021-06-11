/* eslint-disable no-else-return */
import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
font-size: 1.5vw;
font-weight: bold;
width: 25%;
height: 6vw;
background-color: white;
border-width: thin;
margin-right: 5vw;
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
