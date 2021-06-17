import React, { useState } from 'react';

function Fit(
  {
    characteristics, styles, setCharacteristicsObj, characteristicsObj,
  },
) {
  const [recommendProduct, setRecommendProduct] = useState('');

  if (characteristics.Fit !== undefined) {
    let fitObj = {};
    fitObj[JSON.stringify(characteristics.Fit.id)] = recommendProduct;
    setCharacteristicsObj(Object.assign(characteristicsObj, fitObj));
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

  if (characteristics.Fit !== undefined) {
    return (
      <>
        <styles.header>FIT</styles.header>
        <styles.row>
          <styles.label>
            <input
              type="radio"
              id="Fit-1"
              name="Fit"
              value="1"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Fit-2"
              name="Fit"
              value="2"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Fit-3"
              name="Fit"
              value="3"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Fit-4"
              name="Fit"
              value="4"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Fit-5"
              name="Fit"
              value="5"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
        </styles.row>
        <styles.row>
          <styles.label>Runs tight</styles.label>
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

export default Fit;
