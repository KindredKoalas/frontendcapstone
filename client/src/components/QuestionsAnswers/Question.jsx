import React, { useState } from 'react';
import styled from 'styled-components';
import Helpful from './Helpful.jsx';
import AddAnswer from './AddAnswer.jsx';
import Answer from './Answer.jsx';

const QuestionContainer = styled.div`
display: flex;
padding-right: 20%;
justify-content: space-between;
`;

const ButtonStyle = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-weight: 100;
font-size: 10px;
display: flex;
`;

const Q = styled.div`
font-weight: bold;
font-size: 18px;
`;

const Question = ({ item, help, addAnswerToList, answer }) => {
  const answers = item.answers;
  let answerList = [];

  for (var key in answers) {
    answerList.push(answers[key]);
  }
  // answerList = answerList.slice(0, 2);
  // console.log('LIST ',answerList)
  // console.log('ANSWER ',answer)

  const [allAnswers, setAnswerList] = useState(answerList);

  return (
    <div>
      <QuestionContainer>
        <Q>
          Q:&nbsp;
          {item.question_body}
        </Q>
        &nbsp;
        <ButtonStyle>
          <Helpful help={help} />
          <AddAnswer addAnswerToList={addAnswerToList} />
        </ButtonStyle>

      </QuestionContainer>
      <p>

      </p>
      {allAnswers.concat(answer).map((answer, index) =>
        <Answer answer={answer} key={index}  />
      )}
      <p>

      </p>
    </div>
  )
};

export default Question;
