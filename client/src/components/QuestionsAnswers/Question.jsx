import React from 'react';
import styled from 'styled-components';

const Q = styled.div`
font-weight: bold;
`;

const Question = (props) => (
  <div>
    <Q>
      Q:&nbsp;
      {props.item.question_body}
    </Q>
    <p>

    </p>
  </div>

);

export default Question;
