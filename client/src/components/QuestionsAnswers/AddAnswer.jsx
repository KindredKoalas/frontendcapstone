import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const StyledAnswerButton = styled.button`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
background: white;
border: none;
font-size: 11px;
font-weight: 100;
&:hover ${StyledButton} {
  text-decoration: underline;
  color: #C50000;
}
`

const StyledButton = styled.button`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-weight: bold;
width: 200px;
height: 55px;
background-color: white;
border-width: thin;
cursor: pointer;
transition: 0.3s;
&:hover ${StyledButton} {
  background: #C50000;
  color: white;
  border: none;
}
`;

const StyledH2 = styled.h2`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 15%;
`;

const FormDiv = styled.form`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const StyledDiv = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
`;

const StyledInput = styled.input`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 800px;
height: 40px;
`;

const AddAnswer = ({ addAnswerToList }) => {
  const [answerIsOpen, setAnswerIsOpen] = useState(false);
  const [answer, addAnAnswer] = useState('');
  const [name, addName] = useState('');
  const [email, addEmail] = useState('');

    return (
      <div>
        <StyledAnswerButton type="submit" onClick={() => setAnswerIsOpen(true)}>
          Add an answer
        </StyledAnswerButton>
        <Modal isOpen={answerIsOpen}
               ariaHideApp={false}
               onRequestClose={() => setAnswerIsOpen(false)}
        >
          <StyledH2>Ask your Answer about [Product Name Here]</StyledH2>
          <FormDiv
            type="submit"
            value="Submit"
            onSubmit={(event) => {
              event.preventDefault();
              const newAnswer = {
                body: answer,
                answerer_name: name,
                answerer_email: email,
                date: Date.now(),
                helpfulness: 0,
                photos: []
              };

              addAnswerToList(newAnswer);
              addAnAnswer('');
              addName('');
              addEmail('');
              setAnswerIsOpen(false);

            }}
          >
            <label>
              <StyledDiv>Your Answer:</StyledDiv>
              <StyledInput type="text" placeholder="Why did you like the product or not?" value={answer} onChange={(event) => {
                addAnAnswer(event.target.value)}}
                required
              />
            </label>
            <p> </p>
            <label>
            <StyledDiv>What is your nickname?:</StyledDiv>
              <StyledInput type="text" placeholder="John Smith" value={name} onChange={(event) => {
                addName(event.target.value)}}
                required
              />
            </label>
            <p> </p>
            <label>
            <StyledDiv>Your Email:</StyledDiv>
              <StyledInput type="text" placeholder="Example: john123@gmail.com?" value={email} onChange={(event) => {
                addEmail(event.target.value)}}
                required
              />
            </label>
            <p> </p>
            <StyledButton type="submit">SUBMIT</StyledButton>
          </FormDiv>
        </Modal>
      </div>
    )
}

export default AddAnswer;