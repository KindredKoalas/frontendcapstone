import React, { useState } from 'react';
import styled from 'styled-components';
import AddAnswer from './AddAnswer.jsx';

const StyledReport = styled.span`
cursor: pointer;
&:hover ${StyledReport} {
  text-decoration: underline;
  color: #C50000;
}
`;

function Report() {
  // Declare a new state variable, which we'll call "count"
  const [toggle, setToggleOn] = useState('false');

  return (
    <StyledReport onClick={() => setToggleOn(!toggle)}>
      {toggle ? <span>Report</span> : <span>Reported</span>}
    </StyledReport>
  );
}

export default Report;