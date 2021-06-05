// Check whether app component renders correctly
import React from 'react';
import App from '../client/src/components/App.jsx';
import QA from '../client/src/components/QuestionsAnswers/QA.jsx';
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders QA component without crashing", () => {
  shallow(<QA />);
});
