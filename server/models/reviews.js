const axios = require('axios');
const config = require('../../config.js');

let getAllReviews = (callback, productId) => {
  const id = productId.product_id;
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews?product_id=${id}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  };

  axios.get(options.url, options)
  .then(function (response) {
    // handle success
    callback(null, JSON.stringify(response.data));
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    callback(error);
  });
}

let getReviewMetadata = (callback, productId) => {
  const id = productId.product_id;
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta?product_id=${id}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  };

  axios.get(options.url, options)
  .then(function (response) {
    // handle success
    callback(null, JSON.stringify(response.data));
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    callback(error);
  });
}

module.exports.getAllReviews = getAllReviews;
module.exports.getReviewMetadata = getReviewMetadata;