import React from 'react';
import ReviewsAndRatings from './ReviewsAndRatings/ReviewsAndRatings.jsx';
import QA from './QuestionsAnswers/QA.jsx';
import ProductOverview from './ProductDetails/ProductOverview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: null,
    };
  }

  componentDidMount() {
    this.setState({
      product_id: 25180,
    });
  }

  render() {
    if (this.state.product_id === null) {
      return (
        <div>Loading...</div>
      );
    // eslint-disable-next-line no-else-return
    } else {
      return (
        <>
          <ProductOverview />
          <QA
            product_id={this.state.product_id}
          />
          <ReviewsAndRatings
            product_id={this.state.product_id}
          />
        </>
      );
    }
  }
}

export default App;
