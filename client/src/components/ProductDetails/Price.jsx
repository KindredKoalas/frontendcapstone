import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Price(props) {
  if (props.salePrice !== null) {
    return (
      <>
      <span style={{textDecorationLine: 'line-through'}}>{'$' + props.originalPrice}</span>
      <span style={{color: 'red'}}>{' $' + props.salePrice}</span>
      </>
    );
  } else {
    return (
      <>
      {'$' + props.originalPrice}
      </>
    );
  }
};

export default Price;