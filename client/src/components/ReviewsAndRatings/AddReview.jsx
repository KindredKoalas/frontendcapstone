import StarRatings from 'react-star-ratings';
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import CharacteristicsReview from './CharacteristicsReview.jsx';

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

const AddReview = ({ characteristics }) => {
  const [questionIsOpen, setReviewIsOpen] = useState(false);
  const [reviewSummary, addReviewSumary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [name, addName] = useState('');
  const [email, addEmail] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewRatingText, setReviewRatingText] = useState('');
  const [recommendProduct, setRecommendProduct] = useState('');

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
              body: reviewBody,
              date: Date.now(),
              rating: reviewRating,
              reviewer_name: name,
              summary: reviewSummary,
              reviewer_email: email,
              recommend: recommendProduct,
            };
            console.log(newReview);
           // props.addReview(newReview);
            addReviewSumary('');
            setReviewBody('');
            addName('');
            addEmail('');
            setRecommendProduct(true);
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
            <CharacteristicsReview characteristics={characteristics} />
          </label>
          <p> </p>
          <label>
            <StyledDiv>Review Summary:</StyledDiv>
            <StyledInput
              type="text"
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
              placeholder="Why did you like the product or not?"
              value={reviewBody}
              onChange={(event) => {
                setReviewBody(event.target.value);
              }}
              required
            />
          </label>
          <p> </p>
          <label>
            <StyledDiv>What is your nickname?:</StyledDiv>
            <StyledInput
              type="text"
              placeholder="Example: jackson11!"
              value={name}
              onChange={(event) => {
                addName(event.target.value);
              }}
              required
            />
          </label>
          <label>
            For privacy reasons, do not use your full name or email address
          </label>
          <p> </p>
          <label>
            <StyledDiv>Your Email:</StyledDiv>
            <StyledInput
              type="email"
              placeholder="Example: john123@gmail.com?"
              value={email}
              onChange={(event) => {
                addEmail(event.target.value);
              }}
              required
            />
          </label>
          <span>For authentication reasons, you will not be emailed</span>
          <p> </p>
          <StyledButton type="submit">SUBMIT</StyledButton>
        </FormDiv>
      </Modal>
    </div>
  );
};

export default AddReview;
