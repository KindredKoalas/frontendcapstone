import React, { useState } from 'react';
import styled from 'styled-components';

const StyledReport = styled.button`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
background: white;
border: none;
font-size: 11px;
font-weight: 100;
&:hover ${StyledReport} {
  text-decoration: underline;
  color: #C50000;
}
`;

function Report() {
  // Declare a new state variable, which we'll call "count"
  const [toggle, setToggleOn] = useState('false');

  return (
    <StyledReport tabindex="0" onClick={() => setToggleOn(!toggle)}>
      {toggle ? <span>Report</span> : <span>Reported</span>}
    </StyledReport>
  );
}

export default Report;
