import React from 'react';
import styled from 'styled-components';

const Answer = ({ answer }) => {
  return (
    <div>
      A: {answer.body}
    </div>
  )
}

export default Answer;