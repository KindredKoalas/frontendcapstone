// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Rating from './Rating.jsx';
import Characteristics from './Characteristics.jsx';
import SortReviews from './SortReviews.jsx';
import ReviewList from './ReviewList.jsx';
import MoreReviews from './MoreReviews.jsx';
import AddReview from './AddReview.jsx';

const Title = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-size: 18px;
font-weight: 100;
padding-top: 15px;
padding-bottom: 10px;
`;

const Component = styled.div`
padding: 0 50px 0 50px;
//border: solid blue 1px;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1.25fr;
  grid-template-rows: 1fr;
  gap: 45px 45px;
  grid-template-areas:
    ". .";
`;

const Ratings = styled.div`
display: flex;
flex-direction: column;
//border: solid red 1px;
`;

const Reviews = styled.div`
display: flex;
flex-direction: column;
//border: solid purple 1px;
`;

const Buttons = styled.div`
display: flex;
flex-flow: row wrap;
`;

function ReviewsAndRatings({ product_id }) {
  const [ratings, setRatings] = useState({});
  const [totalRecommendedReviews, setTotalRecommendedReviews] = useState(0);
  const [totalNumReviews, setTotalNumReviews] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [characteristics, setCharacteristics] = useState({
    Size: { value: -1 },
    Width: { value: -1 },
    Comfort: { value: -1 },
    Quality: { value: -1 },
    Length: { value: -1 },
    Fit: { value: -1 },
  });
  const [sort, setSort] = useState('relevant');
  const [totalReviews, setTotalReviews] = useState([]);
  const [slicedReviews, setSlicedReviews] = useState([]);
  const [sortstatechanged, setSortStateChanged] = useState(false);
  const [resetcount, setResetCount] = useState(false);

  // Get all meta data
  useEffect(() => {
    axios.get(`/reviews/meta/${product_id}`)
      .then((response) => {
        let data = response.data;
        // console.log(data);
        let totalNumberReviews = 0;
        let totalRatingValues = 0;

        for (const [key, value] of Object.entries(data.ratings)) {
          totalRatingValues = totalRatingValues +key*value;
          totalNumberReviews = totalNumberReviews + Number(value);
        }

        setRatings(data.ratings);
        setTotalNumReviews(String(totalNumberReviews));
        setTotalRecommendedReviews(Number(data.recommended.true));
        setAverageRating((Math.round((totalRatingValues / Number(totalNumberReviews)) * 4) / 4));
        setCharacteristics(data.characteristics);
      });
  }, [totalRecommendedReviews, totalNumReviews, averageRating]);

  // Get all reviews
  useEffect(() => {
    axios.get(`/reviews/${product_id}/${totalNumReviews}/${sort}`)
      .then((response) => {
        // console.log(response.data);
        // console.log(response.data.results);
        setTotalReviews(response.data.results);
        if (slicedReviews.length === 0 || sortstatechanged === true) {
          const slicedarray = response.data.results.slice(0, 2);
          setSlicedReviews(slicedarray);
          setSortStateChanged(false);
        }
      });

      console.log(totalReviews);

  }, [totalReviews.length, averageRating, sort, slicedReviews.length]);

  const addReview = (NewReview) => {
    axios.post('/reviews', NewReview)
      .then((response) => {
        // console.log(response);
        // setSlicedReviews(NewReview);
      });
  };

  return (
    <Component>
      <Title>RATINGS & REVIEWS</Title>
      <GridLayout>
        <Ratings>
          <Rating
            totalNumReviews={totalNumReviews}
            recommended={totalRecommendedReviews}
            ratings={ratings}
            averageRating={averageRating}
          />
          <br />
          <Characteristics characteristics={characteristics} />
        </Ratings>
        <Reviews>
          <SortReviews
            totalNumReviews={totalNumReviews}
            sort={setSort}
            sortStateChanged={setSortStateChanged}
            resetCount={setResetCount}
          />
          <ReviewList reviewList={slicedReviews} />
          <Buttons>
            <MoreReviews
              reviewList={totalReviews}
              slicedReviewsFunction={setSlicedReviews}
              slicedReviews={slicedReviews}
              resetCountState={resetcount}
              resetCount={setResetCount}
            />
            <AddReview
              characteristics={characteristics}
              slicedReviews={slicedReviews}
              setSlicedReviews={setSlicedReviews}
              productId={product_id}
              addReview={addReview}
            />
          </Buttons>
        </Reviews>
      </GridLayout>
    </Component>
  );
}

export default ReviewsAndRatings;
