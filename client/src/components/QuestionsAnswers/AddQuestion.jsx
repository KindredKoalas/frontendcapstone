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
margin-top: 10%;
`;

const FormDiv = styled.form`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`;

const AddQuestion = () => {
  const [questionIsOpen, setQuestionIsOpen] = useState(false);
  const [question, addQuestion] = useState('');

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
          <FormDiv>
            <label>
              Your Question:
              <input type="text" placeholder="Why did you like the product or not?" value={question} onChange={(event) => {
                console.log(event.target.value)
                addQuestion(event.target.value)}}/>
            </label>

            <label>
              What is your nickname?:
              <input type="text" placeholder="John Smith" />
            </label>

            <label>
              Your Email:
              <input type="text" placeholder="Example: john123@gmail.com?" />
            </label>
          </FormDiv>
        </Modal>
      </div>
    )
}

export default AddQuestion;