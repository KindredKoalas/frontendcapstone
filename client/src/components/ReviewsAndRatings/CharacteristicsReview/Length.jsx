import React, { useState } from 'react';

function Length(
  {
    characteristics, styles, setCharacteristicsObj, characteristicsObj,
  },
) {
  const [recommendProduct, setRecommendProduct] = useState('');

  if (characteristics.Length !== undefined) {
    let lengthObj = {};
    lengthObj[JSON.stringify(characteristics.Length.id)] = recommendProduct;
    setCharacteristicsObj(Object.assign(characteristicsObj, lengthObj));
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

  if (characteristics.Length !== undefined) {
    return (
      <>
        <styles.header>LENGTH</styles.header>
        <styles.row>
          <styles.label>
            <input
              type="radio"
              id="Length-1"
              name="Length"
              value="1"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Length-2"
              name="Length"
              value="2"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Length-3"
              name="Length"
              value="3"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Length-4"
              name="Length"
              value="4"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Length-5"
              name="Length"
              value="5"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
        </styles.row>
        <styles.row>
          <styles.label>Runs short</styles.label>
          <styles.label>Perfect</styles.label>
          <styles.label>Runs long</styles.label>
        </styles.row>
      </>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return null;
  }
}

export default Length;
