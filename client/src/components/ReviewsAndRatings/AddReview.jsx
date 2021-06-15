import StarRatings from 'react-star-ratings';
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import CharacteristicsReview from './CharacteristicsReview.jsx';
import axios from 'axios';

const StyledButton = styled.button`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-size: 1.5vw;
font-weight: bold;
width: 75%;
height: 6vw;
background-color: white;
border-width: thin;
margin-right: 5vw;
cursor: pointer;
`;

const StyledH2 = styled.h2`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 15%;
`;

const FormDiv = styled.form`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
`;

const StyledDiv = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
justify-content: flex-start;

`;

const StyledInput = styled.input`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 70vw;
height: 5vw;
`;

const StyledSpan = styled.span`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-size: 1vw;
font-weight: lighter;
`;

const AddReview = ({ characteristics, slicedReviews, productId, addReview}) => {
  const [questionIsOpen, setReviewIsOpen] = useState(false);
  const [reviewSummary, addReviewSumary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [name, addName] = useState('');
  const [email, addEmail] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewRatingText, setReviewRatingText] = useState('');
  const [recommendProduct, setRecommendProduct] = useState('');
  const [textCounterReviewBody, setTextCounterReviewBody] = useState('Minimum required characters left: 50');
  const [reviewPhoto, setReviewPhoto] = useState([]);
  const [characteristicsObj, setCharacteristicsObj] = useState({});

  function changeRating(newRating) {
    setReviewRating(newRating);
    if (newRating === 1) {
      setReviewRatingText('Poor');
    } else if (newRating === 2) {
      setReviewRatingText('Fair');
    } else if (newRating === 3) {
      setReviewRatingText('Average');
    } else if (newRating === 4) {
      setReviewRatingText('Good');
    } else if (newRating === 5) {
      setReviewRatingText('Great');
    }
  }

  function changeRecommendedProduct(event) {
    if (event.target.value === 'true') {
      setRecommendProduct(true);
    } else {
      setRecommendProduct(false);
    }
  }

  function textCounter(text) {
    if (text.length < 50) {
      setTextCounterReviewBody(`Minimum required characters left: ${50 - text.length}`);
    } else {
      setTextCounterReviewBody('Minimum reached');
    }
  }

  return (
    <div>
      <StyledButton type="submit" onClick={() => setReviewIsOpen(true)}>
        ADD A REVIEW +
      </StyledButton>
      <Modal
        isOpen={questionIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setReviewIsOpen(false)}
      >
        <StyledH2>Write Your Reveiw About [Product Name Here]</StyledH2>
        <FormDiv
          type="submit"
          value="Submit"
          onSubmit={(event) => {
            event.preventDefault();
            const newReview = {
              product_id: productId,
              body: reviewBody,
              rating: reviewRating,
              name: name,
              summary: reviewSummary,
              email: email,
              recommend: recommendProduct,
              photos: reviewPhoto,
              characteristics: characteristicsObj,
            };
            let newReviewsArray = [newReview].concat(slicedReviews);
            //console.log(newReview);
            addReview(newReview);
            // setSlicedReviews(newReviewsArray);
            addReviewSumary('');
            setReviewBody('');
            addName('');
            addEmail('');
            setRecommendProduct('');
            setReviewRating(0);
            setReviewIsOpen(false);
          }}
        >
          <label>
            <StyledDiv>Overall Rating:</StyledDiv>
            <StarRatings
              rating={reviewRating}
              starDimension="3vw"
              starSpacing="0.5vw"
              starRatedColor="black"
              changeRating={changeRating}
              numberOfStars={5}
              name="rating"
            />
            &nbsp;
            <span>
              {reviewRatingText}
            </span>
          </label>
          <p> </p>
          <label>
            <StyledDiv>Do you recommend this product?:</StyledDiv>
            <input
              type="radio"
              id="Recommended"
              name="RecommendedProduct"
              value="true"
              onClick={changeRecommendedProduct}
              required
            />
            <label for="Recommended">Yes</label>
            <input
              type="radio"
              id="notRecommended"
              name="RecommendedProduct"
              value="false"
              onClick={changeRecommendedProduct}
            />
            <label for="notRecommended">No</label>
          </label>
          <p> </p>
          <label>
            <StyledDiv>Characteristics:</StyledDiv>
            <CharacteristicsReview
              characteristics={characteristics}
              setCharacteristicsObj={setCharacteristicsObj}
              characteristicsObj={characteristicsObj}
            />
          </label>
          <p> </p>
          <label>
            <StyledDiv>Review Summary:</StyledDiv>
            <StyledInput
              type="text"
              maxLength="60"
              placeholder="Example: Best purchase ever!"
              value={reviewSummary}
              onChange={(event) => {
                addReviewSumary(event.target.value);
              }}
              required
            />
          </label>
          <p> </p>
          <label>
            <StyledDiv>Review Body:</StyledDiv>
            <StyledInput
              type="text"
              minLength="50"
              maxLength="1000"
              placeholder="Why did you like the product or not?"
              value={reviewBody}
              onChange={(event) => {
                setReviewBody(event.target.value);
                textCounter(event.target.value);
              }}
              required
            />
          </label>
          <StyledSpan>
            {textCounterReviewBody}
          </StyledSpan>
          <p> </p>
          <label>
            <StyledDiv>What is your nickname?:</StyledDiv>
            <StyledInput
              type="text"
              maxLength="60"
              placeholder="Example: jackson11!"
              value={name}
              onChange={(event) => {
                addName(event.target.value);
              }}
              required
            />
          </label>
          <StyledSpan>
            For privacy reasons, do not use your full name or email address
          </StyledSpan>
          <p> </p>
          <label>
            <StyledDiv>Your Email:</StyledDiv>
            <StyledInput
              type="email"
              maxLength="60"
              placeholder="Example: john123@gmail.com?"
              value={email}
              onChange={(event) => {
                addEmail(event.target.value);
              }}
              required
            />
          </label>
          <StyledSpan>For authentication reasons, you will not be emailed</StyledSpan>
          <p> </p>
          <StyledButton type="submit">SUBMIT</StyledButton>
        </FormDiv>
      </Modal>
    </div>
  );
};

export default AddReview;
