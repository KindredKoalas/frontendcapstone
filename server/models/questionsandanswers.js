const axios = require('axios');
const config = require('../../config.js');

let getAllQuestionsAnswers = (callback, productId) => {
  const id = productId.product_id;
  let options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=25168',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  };



  // `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=${id}`



  axios.get(options.url, options)
  .then(function (response) {
    // handle success
    callback(null, response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    callback(error);
  });
}

module.exports.getAllQuestionsAnswers = getAllQuestionsAnswers;