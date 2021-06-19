import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings'

const Row = styled.div`
display: flex;
flex-direction: row;
margin-top: 3%;
margin-bottom: 3%;
font-size: 10px;
`;

function StarRating({ averageRating }) {
  return (
    <Row>
      <StarRatings
            rating={averageRating}
            starDimension="15px"
            starSpacing="0px"
            starRatedColor="black"
            numberOfStars={5}
            name="rating"
      />
      <div onClick={() => window.location.replace("/#ratings")}>
        <span>&nbsp; Read All Reviews</span>
      </div>
    </Row>
  );
};

export default StarRating;