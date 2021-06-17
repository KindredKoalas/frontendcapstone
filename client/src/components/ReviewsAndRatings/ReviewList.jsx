import React from 'react';
import Review from './Review.jsx';
import styled from 'styled-components';

const ScrollabeList = styled.div`
max-height: 50vw;
overflow-x:hidden;
overflow-y:scroll;
`;

function ReviewList( {reviewList} ) {
  const reviews = reviewList;
  const reviewsList = reviews.map((review) => (
    <Review
      key={review.review_id}
      reviewObject={review}
    />
  ));
  return (
    <ScrollabeList>
      {reviewsList}
    </ScrollabeList>
  );
}

export default ReviewList;
