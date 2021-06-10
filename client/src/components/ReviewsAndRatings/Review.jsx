import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import PictureList from './PictureList.jsx';

const Reviews = styled.div`
display: flex;
flex-direction: column;
font-size: 1.75vw;
line-height: 2;
`;

const RowDisplay = styled.div`
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
flex-direction: column;
font-size: 1.75vw;
line-height: 2;
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
line-height: 3.5vw;
margin-inline: 1vw;
`;

const Text = styled.div`
display: flex;
margin-inline: 1vw;
line-height: 3.5vw;
`;

function Review({ reviewObject }) {
  const date = new Date(reviewObject.date);
  const month = date.toLocaleString('default', { month: 'long' });

  return (
    <Reviews>
      <RowDisplay>
        <StarRatings
          rating={(Math.round((reviewObject.rating)) * 4) / 4}
          starDimension="1.5vw"
          starSpacing="0px"
          starRatedColor="black"
          numberOfStars={5}
          name="rating"
        />
        {reviewObject.reviewer_name}
        ,&nbsp;{month}
        {date.toString().slice(7, 15)}
      </RowDisplay>
      <Summary>
        {reviewObject.summary}
      </Summary>
      <Body>
        {reviewObject.body.length < 250 ? reviewObject.body : null}
      </Body>
      <PictureList pictureList={reviewObject.photos} />
      <Body>
        {reviewObject.recommend === true ? '✓ I recommend this product' : null}
      </Body>
      <Response>
        <BoldText>
          {(reviewObject.response !== ''
            && reviewObject.response !== null)
            ? "Response:" : null}
        </BoldText>
        <Text>
          {(reviewObject.response !== ''
          && reviewObject.response !== null)
            ? reviewObject.response : null}
        </Text>
      </Response>
      <RowDisplay>
        Helpful? Yes
        (
        {reviewObject.helpfulness}
        ) | No (0)
      </RowDisplay>
      <hr size="1" width="100%" color="#DCDCDC" />
    </Reviews>
  );
}

export default Review;
