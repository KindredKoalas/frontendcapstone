// this helper function will take in response.data.results and create an object with the style_id and skus

const getAllSkusForAllStyles = (resultsPerProduct) => {
  const skuInfo = {};
  for (let i = 0; i < resultsPerProduct.length; i++) {
    const infoPerStyle = resultsPerProduct[i];
    skuInfo.style_id = infoPerStyle.style_id;
    skuInfo.skus = infoPerStyle.skus;
  }
  return skuInfo;
};

module.exports.getAllSkusForAllStyles = getAllSkusForAllStyles;
