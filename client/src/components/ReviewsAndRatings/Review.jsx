import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import PictureList from './PictureList.jsx';

const Reviews = styled.div`
display: flex;
flex-direction: column;
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
flex-shrink: 1;
`;

const RowDisplay = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-size: 11px;
font-weight: 100;
padding-top: 8px;
`;

const NameAndDate = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-size: 11px;
color: grey;
font-weight: lighter;
`;

const Summary = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-size: 18px;
font-weight: bold;
padding-top: 8px;
`;

const Body = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-size: 14px;
font-weight: 100;
padding-top: 8px;
`;

const Response = styled.div`
display: flex;
flex-direction: column;
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-size: 14px;
background: #E8E8E8;
`;

const BoldText = styled.div`
display: flex;
font-weight: bold;
line-height: 30px;
margin-inline: 10px;
`;

const Text = styled.div`
display: flex;
margin-inline: 10px;
line-height: 30px;
`;

function Review({ reviewObject }) {
  const date = new Date(reviewObject.date);
  const month = date.toLocaleString('default', { month: 'long' });

  return (
    <Reviews>
      <NameAndDate>
        <StarRatings
          rating={(Math.round((reviewObject.rating)) * 4) / 4}
          starDimension="15px"
          starSpacing="0px"
          starRatedColor="black"
          numberOfStars={5}
          name="rating"
        />
        {reviewObject.reviewer_name}
        ,&nbsp;{month}
        {date.toString().slice(7, 15)}
      </NameAndDate>
      <Summary>
        {reviewObject.summary}
      </Summary>
      <Body>
        {reviewObject.body.length < 250 ? reviewObject.body : null}
      </Body>
      <Body>
        <PictureList pictureList={reviewObject.photos} />
      </Body>
      <Body>
        {reviewObject.recommend === true ? '✓ I recommend this product' : null}
      </Body>
      <Body />
      <Response>
        <BoldText>
          {(reviewObject.response !== ''
            && reviewObject.response !== null)
            ? 'Response:' : null}
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
