// Check whether app component renders correctly
import React from 'react';
import App from '../client/src/components/App.jsx';
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});