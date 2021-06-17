import React, { useState } from 'react';

function Quality(
  {
    characteristics, styles, setCharacteristicsObj, characteristicsObj,
  },
) {
  const [recommendProduct, setRecommendProduct] = useState('');

  if (characteristics.Quality !== undefined) {
    let qualityObj = {};
    qualityObj[JSON.stringify(characteristics.Quality.id)] = recommendProduct;
    setCharacteristicsObj(Object.assign(characteristicsObj, qualityObj));
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

  if (characteristics.Quality !== undefined) {
    return (
      <>
        <styles.header>QUALITY</styles.header>
        <styles.row>
          <styles.label>
            <input
              type="radio"
              id="Quality-1"
              name="Quality"
              value="1"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Quality-2"
              name="Quality"
              value="2"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Quality-3"
              name="Quality"
              value="3"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Quality-4"
              name="Quality"
              value="4"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
          <styles.label>
            <input
              type="radio"
              id="Quality-5"
              name="Quality"
              value="5"
              onClick={changeRecommendedProduct}
              required
            />
          </styles.label>
        </styles.row>
        <styles.row>
          <styles.label>Poor</styles.label>
          <styles.label>Perfect</styles.label>
        </styles.row>
      </>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return null;
  }
}

export default Quality;
