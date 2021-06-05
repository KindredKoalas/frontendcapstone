const axios = require('axios');
const config = require('../../config.js');

let getAllQuestionsAnswers = (callback, productId) => {
  const id = productId.product_id;
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=${id}`,
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

module.exports.getAllQuestionsAnswers = getAllQuestionsAnswers;