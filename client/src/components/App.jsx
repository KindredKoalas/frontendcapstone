import React from 'react';
import ReviewsAndRatings from './ReviewsAndRatings/ReviewsAndRatings.jsx';

import styled from 'styled-components';
import QA from './QuestionsAnswers/QA.jsx';
const Button = styled.div`
  color: red;
  display: flex;
  justify-content: flex-end;
`;
import ProductOverview from './ProductDetails/ProductOverview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
      <Button>React is running!</Button>
      <ProductOverview />
      <QA />
      <ReviewsAndRatings/>
      </>
    );
  }
}

export default App;
