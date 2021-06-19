import React, { Suspense } from 'react';
import ProductOverview from './ProductDetails/ProductOverview.jsx';
import CircularProgress from '@material-ui/core/CircularProgress';

const QA = React.lazy(() => import('./QuestionsAnswers/QA.jsx'));
const ReviewsAndRatings = React.lazy(() => import('./ReviewsAndRatings/ReviewsAndRatings.jsx'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: null,
    };
  }

  componentDidMount() {
    this.setState({
      product_id: 25167,
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
          <ProductOverview product_id={this.state.product_id} />
          <Suspense fallback={<CircularProgress />}>
            <QA product_id={this.state.product_id} />
            <Suspense fallback={<CircularProgress />}>
              <ReviewsAndRatings product_id={this.state.product_id} />
            </Suspense>
          </Suspense>

        </>
      );
    }
  }
}

export default App;
