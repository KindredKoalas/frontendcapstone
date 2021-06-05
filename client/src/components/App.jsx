import React from 'react';
import ReviewsAndRatings from './ReviewsAndRatings/ReviewsAndRatings.jsx';

import styled from 'styled-components';
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
    }
  }

  render() {
    return (
      <>
      <Button>React is running!</Button>
      <ProductOverview />
      <ReviewsAndRatings/>
      </>
    );
  }
}

export default App;