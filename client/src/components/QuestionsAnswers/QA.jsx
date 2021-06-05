import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
border: solid teal 2px;
`;
const Search = styled.form`
border: solid red 2px;
`;

const Button = styled.button`
border: solid orange 2px;
display: flex;
align-self: center;
`;

const QA = () => {

    return (
      <Container>
        <h3>Questions and Answers</h3>
        <Search>
          <input />
        </Search>
        <ul>
          <li>Q: What kind of material is it?</li>
          <li>A: 100% Cotton</li>
        </ul>
        <Button type="button">Add Question</Button>
      </Container>
  );
};

export default QA;
