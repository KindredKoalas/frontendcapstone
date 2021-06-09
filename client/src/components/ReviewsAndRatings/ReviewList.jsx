import React from 'react';
import Review from './Review.jsx';

function ReviewList(props) {
  const reviews = props.reviewList;
  const reviewList = reviews.map((review) =>
    <Review key={review.review_id} reviewObject={review} />
  );
  return (
    <div>
      {reviewList}
    </div>
  );
}

export default ReviewList;
