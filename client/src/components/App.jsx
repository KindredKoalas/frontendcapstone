import React from 'react';
import ReviewsAndRatings from './ReviewsAndRatings/ReviewsAndRatings.jsx';
import QA from './QuestionsAnswers/QA.jsx';
import ProductOverview from './ProductDetails/ProductOverview.jsx';
const helpers = require('./ProductDetails/Helpers.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: null,
    };
  }

  componentDidMount() {
    this.setState({
      product_id: 25170,
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
          <ProductOverview
            product_id={this.state.product_id}
          />
          <QA />
          <ReviewsAndRatings
            product_id={this.state.product_id}
          />
        </>
      );
    }
  }
}

export default App;
