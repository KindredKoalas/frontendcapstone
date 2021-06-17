import React from 'react';
import ProductOverview from '../client/src/components/ProductDetails/ProductOverview.jsx';

import QA from '../client/src/components/QuestionsAnswers/QA.jsx';
import Search from '../client/src/components/QuestionsAnswers/Search.jsx';
import MoreAqs from '../client/src/components/QuestionsAnswers/MoreAqs.jsx';
import AddQuestion from '../client/src/components/QuestionsAnswers/AddQuestion.jsx';

import { mount, shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });


describe('<QA />', () => {
  it('renders <QA /> component without crashing', () => {
    const wrapper = shallow(<QA />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('<Search />', () => {
  it('renders <Search /> component without crashing', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('<MoreAqs />', () => {
  it('renders <MoreAqs /> component without crashing', () => {
    const wrapper = shallow(<MoreAqs />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('<AddQuestion />', () => {
  it('renders <AddQuestion /> component without crashing', () => {
    const wrapper = shallow(<AddQuestion />);
    expect(wrapper.exists()).toBe(true);
  });
});