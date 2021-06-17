import StarRatings from 'react-star-ratings';
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import CharacteristicsReview from './CharacteristicsReview.jsx';

const StyledButton = styled.button`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-weight: bold;
width: 150px;
height: 55px;
background-color: white;
border-width: thin;
cursor: pointer;
transition: 0.3s;
&:hover ${StyledButton} {
  background: #C50000;
  color: white;
  border: none;
}
`;

const StyledH2 = styled.h2`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: column;
margin-top: 15%;
`;

const FormDiv = styled.form`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: column;
`;

const StyledDiv = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
//justify-content: flex-start;

`;

const StyledInput = styled.input`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 450px;
height: 30px;
`;

const StyledInput2 = styled.input`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 250px;
height: 30px;
padding: 0 15px 0 0;
`;

const StyledSpan = styled.span`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-size: 12px;
font-weight: lighter;
`;

const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const Column = styled.div`
display: flex;
flex-direction: column;
`;

const AddReview = (
  {
    characteristics, slicedReviews, productId, addReview
  },
) => {
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
        <StyledH2>[Product Name Here]</StyledH2>
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
            // let newReviewsArray = [newReview].concat(slicedReviews);
            // console.log(newReview);
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
          <Row>
            <div>
              <StyledDiv>YOUR OVERALL RATING</StyledDiv>
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
            </div>
            <div>
              <StyledDiv>WOULD YOU RECOMMEND THIS PRODUCT?</StyledDiv>
              <input
                type="radio"
                id="Recommended"
                name="RecommendedProduct"
                value="true"
                onClick={changeRecommendedProduct}
                required
              />
              <StyledSpan htmlFor="Recommended">Yes</StyledSpan>
              <input
                type="radio"
                id="notRecommended"
                name="RecommendedProduct"
                value="false"
                onClick={changeRecommendedProduct}
              />
              <StyledSpan htmlFor="notRecommended">No</StyledSpan>
            </div>
          </Row>
          <label>
            {/* <StyledDiv>Characteristics:</StyledDiv> */}
            <CharacteristicsReview
              characteristics={characteristics}
              setCharacteristicsObj={setCharacteristicsObj}
              characteristicsObj={characteristicsObj}
            />
          </label>
          <p> </p>
          <hr size="1" width="100%" color="#DCDCDC" />
          <h3>YOUR REVIEW</h3>
          <Row>
          <label>
            <StyledDiv>SUMMARY</StyledDiv>
            <StyledInput2
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
            <Column>
              <label>
                <StyledDiv>YOUR REVIEW</StyledDiv>
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
            </Column>
          </Row>
          <p />
          <hr size="1" width="100%" color="#DCDCDC" />
          <h3>PERSONAL INFORMATION</h3>
          <Row>
            <Column>
              <label>
                <StyledDiv>NICKNAME</StyledDiv>
                <StyledInput2
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
            </Column>
            <Column>
              <label>
                <StyledDiv>EMAIL</StyledDiv>
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
            </Column>
          </Row>
          <p> </p>
          <StyledButton type="submit">SUBMIT</StyledButton>
        </FormDiv>
      </Modal>
    </div>
  );
};

export default AddReview;
