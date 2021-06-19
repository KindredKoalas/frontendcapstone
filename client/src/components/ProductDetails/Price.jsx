import React from 'react';

function Price(props) {
  let original = Math.round(Number(props.originalPrice));
  let sale = Math.round(Number(props.salePrice));
  if (props.salePrice !== null) {
    return (
      <>
      <span className="originalPrice" style={{textDecorationLine: 'line-through'}}>{'$' + original}</span>
      <span className="salePrice" style={{color: 'red'}}>{' $' + sale}</span>
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