import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
justify-content: right;
cursor: pointer;
&:hover ${StyledSpan} {
  text-decoration: underline;
  color: #C50000;
}
`;

const Helpful = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Helpful?
      &nbsp;
      <StyledSpan type="button" onClick={() => setCount(count + 1)}>Yes</StyledSpan>
      &nbsp;
      <span>
        (
          <span>{count}</span>
        )
      </span>
      &nbsp;&nbsp; | &nbsp;&nbsp;
    </div>
  )

}

export default Helpful;