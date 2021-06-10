// this helper function will take in response.data.results and create an object with the style_id and skus

let getAllSkusPerStyle = (styleId, messyResults) => {
  let allSkusPerStyle = {};
  for (let i = 0; i < messyResults.length; i++) {
    let resultsPerStyle = messyResults[i];
    if (styleId === resultsPerStyle.style_id) {
      allSkusPerStyle = resultsPerStyle.skus;
    }
  }

  let quantitiesAndSizes = [];
  for (let sku in allSkusPerStyle) {
    quantitiesAndSizes.push(allSkusPerStyle[sku]);
  }
  return quantitiesAndSizes;
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

module.exports.getAllSkusPerStyle = getAllSkusPerStyle;
module.exports.getAllImagesForAllStyles = getAllImagesForAllStyles;
