import React, { useState } from 'react';
import styled from 'styled-components';

const Helpful = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Helpful?
      &nbsp;
      <span type="button" onClick={() => setCount(count + 1)}>Yes</span>
      &nbsp;
      <span>
        (
          <span>{count}</span>
        )
      </span>
      &nbsp;&nbsp; | &nbsp;&nbsp; Add Answer
    </div>
  )

}

export default Helpful;