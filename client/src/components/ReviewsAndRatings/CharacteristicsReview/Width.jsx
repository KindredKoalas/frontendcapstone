import React, { useState } from 'react';

function Width({ characteristics, styles, setCharacteristicsObj, characteristicsObj }) {
  const [recommendProduct, setRecommendProduct] = useState('');

  if (characteristics.Width !== undefined) {
    let widthObj = {};
    widthObj[JSON.stringify(characteristics.Width.id)] = recommendProduct;
    setCharacteristicsObj(Object.assign(characteristicsObj, widthObj));
  }

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
        <styles.header>WIDTH</styles.header>
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
          </styles.label>
        </styles.row>
        <styles.row>
          <styles.label>Too narrow</styles.label>
          <styles.label>Perfect</styles.label>
          <styles.label>Too wide</styles.label>
        </styles.row>
      </>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return null;
  }
}

export default Width;
