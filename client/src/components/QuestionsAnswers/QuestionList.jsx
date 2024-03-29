import React from 'react';
import styled from 'styled-components';
import Question from './Question.jsx';

const Scroll = styled.div`
max-height: 45vw;
overflow-x: hidden;
overflow-y: scroll;
`;

const QuestionList = ({ list, addAnswerToList, answer }) => (
  <Scroll>
    {list.map((item, index) =>
      <Question item={item} key={index} help={item.question_helpfulness} addAnswerToList={addAnswerToList} answer={answer} />)}
  </Scroll>
);

export default QuestionList;
