import React from 'react';

function ProductCategory(props) {
  return (
    <>
    <div>CATEGORY</div>
    <h1>{props.currentCategory}</h1>
    </>
  );
}

export default ProductCategory;