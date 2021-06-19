import React from 'react';
import styled from 'styled-components';
import HelpfulAnswer from './HelpfulAnswer.jsx';
import Report from './Report.jsx';
import Photo from './Photo.jsx';

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
padding-top: 4px;
margin-bottom: 15px;
`;

const AnswerBody = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
font-size: 14px;
font-weight: 100;
padding-top: 4px;
`;

const NameAndDate = styled.div`
padding-left: 25px;
color: #696969
`;

const PhotoContainer = styled.div`
display: flex;
align-content: space-between;
padding-left: 25px;
`;

const Answer = ({ answer }) => {
  const help = answer.helpfulness;
  const { photos } = answer;

  return (
    <div>
      <AnswerContainer>
        <A>
          {Object.keys(answer).length > 0 ? <span>A:&nbsp;</span> : null}
        </A>
        <AnswerBody>
          {answer.body}
        </AnswerBody>
        <p />
      </AnswerContainer>
      <PhotoContainer>
        {photos && photos.length > 0
          ? <div>{photos.map((photo, index) => <Photo photo={photo} key={index} />)}</div> : null}
      </PhotoContainer>
      <AnswerInfo>

        <NameAndDate>
          by&nbsp;
          {answer.answerer_name}
          ,&nbsp;
          {new Date(answer.date).toDateString()}
        </NameAndDate>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <HelpfulAnswer help={help} />
        <Report />

      </AnswerInfo>
    </div>
  );
};

export default Answer;
