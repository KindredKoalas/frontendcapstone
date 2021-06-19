const axios = require('axios');
const config = require('../../config.js');

let options = {
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products`,
  headers: {
    'User-Agent': 'request',
    'Authorization': config.TOKEN
  }
};

let getAllProducts = (callback) => {

  axios.get(options.url, options)
  .then(function (response) {
    // handle success
    callback(null, response.data);
  })
  .catch(function (error) {
    // handle error
    callback(error);
  });
}

let getStylesPerProduct = (callback, product_id) => {
  const id = product_id.product_id;
  let url = `${options.url}/${id}/styles`;

  axios.get(url, options)
  .then(function (response) {
    // handle success
    callback(null, response.data);
  })
  .catch(function (error) {
    // handle error
    callback(error);
  });
}

let getInfoPerProductId = (callback, product_id) => {
  const id = product_id.product_id;
  let url = `${options.url}/${id}`;

  axios.get(url, options)
  .then(function (response) {
    // handle success
    callback(null, response.data);
  })
  .catch(function (error) {
    // handle error
    callback(error);
  });
}

module.exports.getAllProducts = getAllProducts;
module.exports.getStylesPerProduct = getStylesPerProduct;
module.exports.getInfoPerProductId = getInfoPerProductId;