import React from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => (
  <div>
    {props.list.map((item, index) =>
      <Question item={item} key={index} />)}
  </div>
);

export default QuestionList;
