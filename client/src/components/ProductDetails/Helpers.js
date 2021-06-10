// this helper function will take in response.data.results and create an object with the style_id and skus

let getAllSkusForAllStyles = (resultsPerProduct) => {
  let skuInfo = {};
  for (let i = 0; i < resultsPerProduct.length; i++) {
    let infoPerStyle = resultsPerProduct[i];
    skuInfo.style_id = infoPerStyle.style_id;
    skuInfo.skus = infoPerStyle.skus;
  }
  return skuInfo;
};

let getAllImagesForAllStyles = (styleId, messyResults) => {
  let allImagesPerStyle = [];
  for (let i = 0; i < messyResults.length; i++) {
    let resultsPerStyle = messyResults[i];
    if (styleId === resultsPerStyle.style_id) {
      allImagesPerStyle = resultsPerStyle.photos;
    }
  }
  return allImagesPerStyle;
};

module.exports.getAllSkusForAllStyles = getAllSkusForAllStyles;
module.exports.getAllImagesForAllStyles = getAllImagesForAllStyles;
