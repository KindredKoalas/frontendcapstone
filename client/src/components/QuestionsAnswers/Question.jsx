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

const StyledLoadMoreButton = styled.button`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
background: white;
border: none;
font-size: 11px;
font-weight: 700;
&:hover ${StyledLoadMoreButton} {
  text-decoration: underline;
  color: #C50000;
}
`

const Question = ({ item, help, addAnswerToList, answer }) => {
  // console.log('question ', item)
  const answers = item.answers;
  // console.log('id ', item.question_id);
  let answerList = [];

  for (var key in answers) {
    answerList.push(answers[key]);
  }
  answerList = answerList.slice(0, 4);
  // console.log('LIST ',answerList)
  // console.log('ANSWER ',answer)

  if (item.question_id === answer.question_id) {
    answerList.push(answer);
    // console.log(answerList);
  }

  // if (answer.length > 0) {
  //   answerList.push(answer);
  // }

  // const [allAnswers, setAnswerList] = useState(answerList);

  // console.log('answer list ', allAnswers)

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
          <AddAnswer addAnswerToList={addAnswerToList} question_id={item.question_id} />
        </ButtonStyle>

      </QuestionContainer>
      <p>

      </p>
      {answerList.map((answer, index) =>
        <Answer answer={answer} key={index} question_id={item.question_id}  />
      )}
      <p>

      </p>
      {answerList.length > 2 ? <StyledLoadMoreButton>LOAD MORE ANSWERS</StyledLoadMoreButton> : <div></div>}
      <p>

      </p>
    </div>
  )
};

export default Question;
