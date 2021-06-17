import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

function ProductCategory(props) {
  return (
    <>
    <div>CATEGORY</div>
    <h1>{props.currentCategory}</h1>
    </>
  );
}

export default ProductCategory;