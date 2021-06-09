import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

const Reviews = styled.div`
display: flex;
flex-direction: column;
line-height: 1.5;
`;

const Row = styled.span`
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 1.5vw;
font-weight: lighter;
`;

const Summary = styled.div`
display: flex;
font-size: 2vw;
font-weight: bold;
`;

const Body = styled.div`
display: flex;
font-size: 1.75vw
`;

const Response = styled.div`
display: flex;
flex-direction: column;
font-size: 1.75vw;
background: #E8E8E8;
`;

const BoldText = styled.div`
display: flex;
font-weight: bold;
line-height: 3vw;
margin-inline: 1vw;
`;

const Text = styled.div`
display: flex;
margin-inline: 1vw;
line-height: 3vw;
`;

function Review(props) {
  const date = new Date(props.reviewObject.date);
  const month = date.toLocaleString('default', { month: 'long' });

  return (
    <Reviews>
      <Row>
        <StarRatings
          rating={(Math.round((props.reviewObject.rating)) * 4) / 4}
          starDimension="1.5vw"
          starSpacing="0px"
          starRatedColor="black"
          numberOfStars={5}
          name="rating"
        />
        {props.reviewObject.reviewer_name}
        ,&nbsp;{month}
        {date.toString().slice(7, 15)}
      </Row>
      <Summary>
        {props.reviewObject.summary}
      </Summary>
      <Body>
        {props.reviewObject.recommend === true ? '✓ I recommend this product' : null}
      </Body>
      <Response>
        <BoldText>
          {(props.reviewObject.response.length !== 0
            && props.reviewObject.response !== null)
            ? "Response:" : null}
        </BoldText>
        <Text>
          {(props.reviewObject.response.length !== 0
          && props.reviewObject.response !== null)
            ? props.reviewObject.response : null}
        </Text>
      </Response>
      <hr size="1" width="100%" color="#DCDCDC" />
    </Reviews>
  );
}

export default Review;
