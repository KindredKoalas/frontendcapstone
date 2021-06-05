const axios = require('axios');
const config = require('../../config.js');

let getAllProducts = (callback) => {

  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  };

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

module.exports.getAllProducts = getAllProducts;