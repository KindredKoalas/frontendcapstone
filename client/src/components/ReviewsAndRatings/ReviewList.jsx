import React from 'react';
import Review from './Review.jsx';

function ReviewList( {reviewList} ) {
  const reviews = reviewList;
  const reviewsList = reviews.map((review) => (
    <Review
      key={review.review_id}
      reviewObject={review}
    />
  ));
  return (
    <div>
      {reviewsList}
    </div>
  );
}

export default ReviewList;
