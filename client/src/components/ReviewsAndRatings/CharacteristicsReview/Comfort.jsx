import React, { useState } from 'react';

function Comfort(
  {
    characteristics, styles, setCharacteristicsObj, characteristicsObj,
  },
) {
  const [recommendProduct, setRecommendProduct] = useState('');

  if (characteristics.Comfort !== undefined) {
    let comfortObj = {};
    comfortObj[JSON.stringify(characteristics.Comfort.id)] = recommendProduct;
    setCharacteristicsObj(Object.assign(characteristicsObj, comfortObj));
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

  if (characteristics.Comfort !== undefined) {
    return (
      <>
        <styles.header>COMFORT</styles.header>
        <styles.row>
          <styles.label>
            <input
              type="radio"
              id="Comfort-1"
              name="Comfort"
              value="1"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Comfort-2"
              name="Comfort"
              value="2"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Comfort-3"
              name="Comfort"
              value="3"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="4"
              name="Comfort"
              value="Comfort-4"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Comfort-5"
              name="Comfort"
              value="5"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
        </styles.row>
        <styles.row>
          <styles.label>Uncomfortable</styles.label>
          <styles.label>Perfect</styles.label>
        </styles.row>
      </>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return null;
  }
}

export default Comfort;
