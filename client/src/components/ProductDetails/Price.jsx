import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Price(props) {
  let original = Math.round(Number(props.originalPrice));
  let sale = Math.round(Number(props.salePrice));
  if (props.salePrice !== null) {
    return (
      <>
      <span style={{textDecorationLine: 'line-through'}}>{'$' + original}</span>
      <span style={{color: 'red'}}>{' $' + sale}</span>
      </>
    );
  } else {
    return (
      <>
      {'$' + original}
      </>
    );
  }
};

export default Price;