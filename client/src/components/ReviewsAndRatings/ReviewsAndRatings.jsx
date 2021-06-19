import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import Rating from './Rating.jsx';
// import Characteristics from './Characteristics.jsx';
// import SortReviews from './SortReviews.jsx';
// import ReviewList from './ReviewList.jsx';
// import MoreReviews from './MoreReviews.jsx';
// import AddReview from './AddReview.jsx';
const Rating = React.lazy(() => import('./Rating.jsx'));
const Characteristics = React.lazy(() => import('./Characteristics.jsx'));
const SortReviews = React.lazy(() => import('./SortReviews.jsx'));
const ReviewList = React.lazy(() => import('./ReviewList.jsx'));
const MoreReviews = React.lazy(() => import('./MoreReviews.jsx'));
const AddReview = React.lazy(() => import('./AddReview.jsx'));
import Helpers from './Helpers.js';

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

        let totalRatingValues = Helpers.getTotalRatingReviews(data.ratings);
        let totalNumberReviews = Helpers.getTotalNumberReviews(data.ratings);

        setRatings(data.ratings);
        setTotalNumReviews(String(totalNumberReviews));
        setTotalRecommendedReviews(Number(data.recommended.true));
        setAverageRating((Math.round((totalRatingValues / Number(totalNumberReviews)) * 4) / 4));
        setCharacteristics(data.characteristics);
      });
  }, [totalRecommendedReviews, totalNumReviews, averageRating, product_id]);

  // Get all reviews
  useEffect(() => {
    axios.get(`/reviews/${product_id}/${totalNumReviews}/${sort}`)
      .then((response) => {
        // console.log(response.data);
        setTotalReviews(response.data.results);
        if (slicedReviews.length === 0 || sortstatechanged === true) {
          const slicedarray = response.data.results.slice(0, 2);
          setSlicedReviews(slicedarray);
          setSortStateChanged(false);
        }
      });
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
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Component>
  );
}

export default ReviewsAndRatings;
