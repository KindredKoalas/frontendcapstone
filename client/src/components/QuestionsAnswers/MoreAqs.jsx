import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-weight: bold;
width: 275px;
height: 55px;
background-color: white;
border-width: thin;
margin-right: 10px;
cursor: pointer;
transition: 0.3s;
&:hover ${StyledButton} {
  background: #C50000;
  color: white;
  border: none;
}
`;

const MoreAqs = (props) => {
  const [moreAqsIsOpen, setMoreAqsIsOpenOpen] = useState(false);
  const [count, incrementCount] = useState(2);
  return (
    <div>
      <StyledButton onClick={() => {
        setMoreAqsIsOpenOpen(!moreAqsIsOpen)
        if (!moreAqsIsOpen) {
          incrementCount(count + 2);
          props.moreAqs(count + 2);
        } else {
          incrementCount(count - 2);
          props.moreAqs(count - 2);
        }
      }}>
        {!moreAqsIsOpen ? <span>MORE ANSWERED QUESTIONS</span> : <span>COLLAPSE</span>}
      </StyledButton>
    </div>
  )
}

export default MoreAqs;