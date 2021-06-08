import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

function ProductCategory(props) {
  return (
    <>
    <div>CATEGORY</div>
    <h2>{props.currentCategory}</h2>
    </>
  );
}

export default ProductCategory;