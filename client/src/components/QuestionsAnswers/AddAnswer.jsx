import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';



const StyledButton = styled.button`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-weight: bold;
width: 200px;
height: 50px;
background-color: white;
border-width: thin;
cursor: pointer;
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

const AddAnswer = (props) => {
  const [answerIsOpen, setAnswerIsOpen] = useState(false);
  const [answer, addAnAnswer] = useState('');
  const [name, addName] = useState('');
  const [email, addEmail] = useState('');

    return (
      <div>
        <button type="submit" onClick={() => setAnswerIsOpen(true)}>
          Add an answer
        </button>
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