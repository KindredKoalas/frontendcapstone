import React from 'react';
import axios from 'axios';

class ReviewsAndRatings extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    fetch('/reviews/25167')
    .then(response => response.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <h5>RATINGS AND REVIEWS</h5>
    )
  }
}

export default ReviewsAndRatings;