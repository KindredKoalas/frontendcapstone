import React, { useState } from 'react';

function Size({ characteristics, styles }) {
  const [recommendProduct, setRecommendProduct] = useState('');
  const value = { Size: recommendProduct };
  console.log(value);

  function changeRecommendedProduct(event) {
    if (event.target.value === '1') {
      setRecommendProduct(1);
    } else if (event.target.value === '2') {
      setRecommendProduct(2);
    } else if (event.target.value === '3') {
      setRecommendProduct(3);
    } else if (event.target.value === '4') {
      setRecommendProduct(4);
    } else if (event.target.value === '5') {
      setRecommendProduct(5);
    }
  }

  if (characteristics.Size !== undefined) {
    return (
      <>
        <styles.header>Size</styles.header>
        <styles.row>
          <styles.label>
            <input
              type="radio"
              id="Size-1"
              name="Size"
              value="1"
              onClick={changeRecommendedProduct}
              required
            />
            A size too small
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Size-2"
              name="Size"
              value="2"
              onClick={changeRecommendedProduct}
              required
            />
            1/2 a size to small
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Size-3"
              name="Size"
              value="3"
              onClick={changeRecommendedProduct}
              required
            />
            Perfect
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Size-4"
              name="Size"
              value="4"
              onClick={changeRecommendedProduct}
              required
            />
            1/2 a size too big
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Size-5"
              name="Size"
              value="5"
              onClick={changeRecommendedProduct}
              required
            />
            A size too wide
          </styles.label>
        </styles.row>
      </>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return null;
  }
}

export default Size;
