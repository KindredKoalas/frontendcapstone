import React, { useState } from 'react';

function Width({ characteristics, styles }) {
  const [recommendProduct, setRecommendProduct] = useState('');
  const value = { Width: recommendProduct };

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

  if (characteristics.Width !== undefined) {
    return (
      <>
        <styles.header>Width</styles.header>
        <styles.row>
          <styles.label>
            <input
              type="radio"
              id="Width-1"
              name="Width"
              value="1"
              onClick={changeRecommendedProduct}
              required
            />
            Too narrow
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Width-2"
              name="Width"
              value="2"
              onClick={changeRecommendedProduct}
              required
            />
            Slightly narrow
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Width-3"
              name="Width"
              value="3"
              onClick={changeRecommendedProduct}
              required
            />
            Perfect
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Width-4"
              name="Width"
              value="4"
              onClick={changeRecommendedProduct}
              required
            />
            Slightly wide
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Width-5"
              name="Width"
              value="5"
              onClick={changeRecommendedProduct}
              required
            />
            Too wide
          </styles.label>
        </styles.row>
      </>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return null;
  }
}

export default Width;
