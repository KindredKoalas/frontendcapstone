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
font-size: 13px;
`;

const StarRating = styled.span`
font-size: 13px;
`;

const StarRow = styled.span`
display: flex;
flex-direction: row;
text-decoration: underline;
&:hover {
  color: green;
}
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
                starRatedColor="black"
                numberOfStars={5}
                name='rating'
              />
          </Row>
          <RecommendedReviews>
            {Math.round((this.props.recommended/this.props.totalNumReviews)*100)}% of reviews recommend this product</RecommendedReviews>
          <StarRating className="StarRatings">
            <StarRow>
              <span>5 stars <progress value ={this.props.ratings['5'] || '0'} max = {this.props.totalNumReviews || '0'}/></span>
            </StarRow>
            <StarRow>
              <span>4 stars <progress value ={this.props.ratings['4'] || '0'} max = {this.props.totalNumReviews}/></span>
            </StarRow>
            <StarRow>
              <span>3 stars <progress value ={this.props.ratings['3'] || '0'} max = {this.props.totalNumReviews}/></span>
            </StarRow>
            <StarRow>
              <span>2 stars <progress value ={this.props.ratings['2'] || '0'} max = {this.props.totalNumReviews}/></span>
            </StarRow>
            <StarRow>
              <span>1 stars <progress value ={this.props.ratings['1'] || '0'} max = {this.props.totalNumReviews}/></span>
            </StarRow>
          </StarRating>
        </Reviews>
      </>
    )
  }
}

export default Rating;