import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-weight: bold;
width: 200px;
height: 50px;
background-color: white;
border-width: thin;
margin-right: 10px;
`;

const MoreAqs = (props) => {
  const [moreAqsIsOpen, setMoreAqsIsOpenOpen] = useState(false);
  return (
    <div>
      <StyledButton onClick={() => {
        setMoreAqsIsOpenOpen(!moreAqsIsOpen)
        if(!moreAqsIsOpen) {
          props.moreAqs();
        } else {
          props.moreAqs();
        }
      }}>
        {!moreAqsIsOpen ? <span>MORE ANSWERED QUESTIONS</span> : <span>COLLAPSE</span>}
      </StyledButton>
    </div>
  )
}

export default MoreAqs;