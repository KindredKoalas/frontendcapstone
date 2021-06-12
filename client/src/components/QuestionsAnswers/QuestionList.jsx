import React from 'react';
import Question from './Question.jsx';

const QuestionList = ({ list, addAnswerToList, answer }) => (
  <div>
    {list.map((item, index) =>
      <Question item={item} key={index} help={item.question_helpfulness} addAnswerToList={addAnswerToList} answer={answer} />)}
  </div>
);

export default QuestionList;
