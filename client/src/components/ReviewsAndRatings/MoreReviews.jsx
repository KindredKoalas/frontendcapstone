/* eslint-disable no-else-return */
import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
font-weight: bold;
width: 3025;
height: 6vw;
background-color: white;
border-width: thin;
margin-right: 5vw;
`;

function MoreReviews({ reviewList, slicedReviewsFunction, slicedReviews }) {
  const [count, setCount] = useState(4);

  function showMoreReviews() {
    setCount(count + 2);
    const slicedarray = reviewList.slice(0, count);
    slicedReviewsFunction(slicedarray);
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
