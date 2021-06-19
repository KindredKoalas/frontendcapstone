import React from 'react';
import ReviewsAndRatings from '../client/src/components/ReviewsAndRatings/ReviewsAndRatings.jsx';
import Characteristics from '../client/src/components/ReviewsAndRatings/Characteristics.jsx';
import ReviewList from '../client/src/components/ReviewsAndRatings/ReviewList.jsx';
import MoreReviews from '../client/src/components/ReviewsAndRatings/MoreReviews.jsx';
import { mount, shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from 'sinon';

configure({ adapter: new Adapter() });

// Purpose: To test whether the ReviewsAndRatings component renders

describe('<ReviewsAndRatings />', () => {
  it('renders <ReviewsAndRatings /> component without crashing', () => {
    const wrapper = shallow(<ReviewsAndRatings />);
    expect(wrapper.exists()).toBe(true);
  });
});

// Purpose: To test whether props are correctly passed to child component

const characteristics = {
  Comfort: { id: 84506, value: '3.0769230769230769' },
  Fit: { id: 84504, value: '2.8461538461538462' },
  Length: { id: 84505, value: '2.6923076923076923' },
  Quality: { id: 84507, value: '2.3846153846153846' },
};

const reviewList = [
  {
    review_id: 348639,
    rating: 4,
    summary: 'This product was ok!',
    recommend: false,
    response: '',
    body: 'I really did not like this product solely because I am tiny and do not fit into it.',
    date: '2019-01-11T00:00:00.000Z',
    reviewer_name: 'mymainstreammother',
    helpfulness: 2,
    photos: [],
  },
  {
    review_id: 406883,
    rating: 5,
    summary: 'testtesttesttesttesttest',
    recommend: true,
    response: null,
    body: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
    date: '2021-06-15T00:00:00.000Z',
    reviewer_name: 'test',
    helpfulness: 0,
    photos: [],
  },
  {
    body: 'qweweqewqewqeqweqweqweqweqweweqewqewqeqweqweqweqweqweweqewqewqeqweqweqweqweqweweqewqewqeqweqweqweqwe',
    date: '2021-06-16T00:00:00.000Z',
    helpfulness: 0,
    photos: [],
    rating: 3,
    recommend: true,
    response: null,
    review_id: 406961,
    reviewer_name: 'qwe',
    summary: 'qweq',
  },
  {
    body: 'Blend in to your crowd',
    date: '2021-06-03T00:00:00.000Z',
    helpfulness: 0,
    photos: [],
    rating: 5,
    recommend: true,
    response: null,
    review_id: 367834,
    reviewer_name: 'Jackets',
    summary: 'Camo Onesie',
  },
];

describe('Passing props', () => {
  const characteristicsWrapper = mount(<Characteristics characteristics={characteristics} />);
  it('Characteristics accepts selected characteristics props from ReviewsAndRatings', () => {
    expect(characteristicsWrapper.props().characteristics).toEqual(characteristics);
  });

  const reviewListWrapper = mount(<ReviewList reviewList={reviewList} />);
  it('ReviewList accepts selected reviews props from ReviewsAndRatings', () => {
    expect(reviewListWrapper.props().reviewList).toEqual(reviewList);
  });
});

// Purpose: To test click functionality works for More Reviews
/*
const slicedReviews = [
  {
    review_id: 348639,
    rating: 4,
    summary: 'This product was ok!',
    recommend: false,
    response: '',
    body: 'I really did not like this product solely because I am tiny and do not fit into it.',
    date: '2019-01-11T00:00:00.000Z',
    reviewer_name: 'mymainstreammother',
    helpfulness: 2,
    photos: [],
  },
  {
    review_id: 406883,
    rating: 5,
    summary: 'testtesttesttesttesttest',
    recommend: true,
    response: null,
    body: 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest',
    date: '2021-06-15T00:00:00.000Z',
    reviewer_name: 'test',
    helpfulness: 0,
    photos: [],
  },
];

describe('Simulating click event on More Reviews', () => {
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<MoreReviews
      onClick={onButtonClick}
      slicedReviews={slicedReviews}
      reviewList={reviewList}
    />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).toHaveBeenCalled();
  });
});
*/