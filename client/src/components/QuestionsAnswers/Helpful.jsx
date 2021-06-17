import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
cursor: pointer;
font-size: 11px;
font-weight: 100;
&:hover ${StyledSpan} {
  text-decoration: underline;
  color: #C50000;
}
`;

const HelpfulStyle = styled.span`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
cursor: pointer;
font-size: 11px;
font-weight: 100;
`;

const Helpful = ({ help }) => {
  const [count, setCount] = useState(help);
  return (
    <div>
      <HelpfulStyle>
        Helpful?
        &nbsp;

      <StyledSpan type="button" onClick={() => setCount(count + 1)}>Yes</StyledSpan>
      &nbsp;
      <span>
        (
          <span>{count}</span>
        )
      </span>
      </HelpfulStyle>
      &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;
    </div>
  )
}

export default Helpful;