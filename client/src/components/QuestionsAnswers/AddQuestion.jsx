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

const AddQuestion = (props) => {
  const [questionIsOpen, setQuestionIsOpen] = useState(false);
  const [question, addQuestion] = useState('');
  const [name, addName] = useState('');
  const [email, addEmail] = useState('');

    return (
      <div>
        <StyledButton type="submit" onClick={() => setQuestionIsOpen(true)}>
          ADD QUESTION +
        </StyledButton>
        <Modal isOpen={questionIsOpen}
               ariaHideApp={false}
               onRequestClose={() => setQuestionIsOpen(false)}
        >
          <StyledH2>Ask your Question about [Product Name Here]</StyledH2>
          <FormDiv
            type="submit"
            value="Submit"
            onSubmit={(event) => {
              event.preventDefault();
              event.target.reset();
              const newQuestion = {
                question_body: question,
                asker_name: name,
                asker_email: email,
                question_date: Date.now(),
                reported: false,
                answers: {},
              };

              props.addQuestion(newQuestion);
              addQuestion('');
              addName('');
              addEmail('');
              setQuestionIsOpen(false);
            }}
          >
            <label>
              <StyledDiv>Your Question:</StyledDiv>
              <StyledInput type="text" placeholder="Why did you like the product or not?" value={question} onChange={(event) => {
                addQuestion(event.target.value)}}
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

export default AddQuestion;