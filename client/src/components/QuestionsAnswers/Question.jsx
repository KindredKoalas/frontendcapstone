import React from 'react';
import styled from 'styled-components';
import Helpful from './Helpful.jsx';

const Q = styled.div`
font-weight: bold;
`;

const Question = (props) => (
  <div>
    <Q>
      Q:&nbsp;
      {props.item.question_body}
    </Q>
    &nbsp;
    <Helpful />
    <p>

    </p>
  </div>

);

export default Question;
