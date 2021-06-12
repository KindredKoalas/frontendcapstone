import React from 'react';
import styled from 'styled-components';
import HelpfulAnswer from './HelpfulAnswer.jsx';
import Report from './Report.jsx';

const A = styled.div`
font-weight: bold;
font-size: 18px;
`;

const AnswerContainer = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
`;

const AnswerInfo = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
font-size: 11px;
font-weight: 100;
`;

const AnswerBody = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
font-size: 14px;
font-weight: 100;
padding-top: 1px;
`;

const NameAndDate = styled.div`
color: grey;
padding-left: 25px;
`;

const Answer = ({ answer }) => {
  const help = answer.helpfulness;
  return (
    <div>
      <AnswerContainer>
        <A>
          A:&nbsp;
        </A>
        <AnswerBody>
          {answer.body}
        </AnswerBody>
        <p>

        </p>
      </AnswerContainer>
      <AnswerInfo>
        <p>

        </p>
        <NameAndDate>
          by {answer.answerer_name},&nbsp;
          {new Date(answer.date).toDateString()}
        </NameAndDate>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <HelpfulAnswer help={help}/>
        <Report />
        <p>

        </p>
      </AnswerInfo>
    </div>
  )
}

export default Answer;