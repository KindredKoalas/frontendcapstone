import React, { useState } from 'react';

function Comfort({ characteristics, styles }) {
  const [recommendProduct, setRecommendProduct] = useState('');
  const value = { Comfort: recommendProduct };

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
        <styles.header>Comfort</styles.header>
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
            Uncomfortable
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
            Slightly uncomfortable
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
            Ok
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
            Comfortable
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
            Perfect
          </styles.label>
        </styles.row>
      </>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return null;
  }
}

export default Comfort;
