import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

const Reviews = styled.div`
display: flex;
flex-direction: column;
`;

const Row = styled.div`
display: flex;
flex-direction: row;
`;

const AverageRating = styled.span`
font-size: 45px;
font-weight: bold;
`;

const RecommendedReviews = styled.span`
font-size: 15px;
`;

class Rating extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <>
      <Reviews>
        <Row>
          <AverageRating>{this.props.averageRating}</AverageRating>
          <StarRatings
              rating={this.props.averageRating}
              starDimension="15px"
              starSpacing="0px"
              starRatedColor="blue"
              numberOfStars={5}
              name='rating'
            />
        </Row>
      <RecommendedReviews>{Math.round((this.props.recommended/this.props.totalNumReviews)*100)}% of reviews recommend this product</RecommendedReviews>
      <span>5 stars <progress value ={this.props.ratings['5']} max = {this.props.totalNumReviews || '0'}/></span>
      <span>4 stars <progress value ={this.props.ratings['4'] || '0'} max = {this.props.totalNumReviews}/></span>
      <span>3 stars <progress value ={this.props.ratings['3'] || '0'} max = {this.props.totalNumReviews}/></span>
      <span>2 stars <progress value ={this.props.ratings['2'] || '0'} max = {this.props.totalNumReviews}/></span>
      <span>1 stars <progress value ={this.props.ratings['1'] || '0'} max = {this.props.totalNumReviews}/></span>
      </Reviews>
      </>
    )
  }
}

export default Rating;