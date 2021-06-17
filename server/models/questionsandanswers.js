const axios = require('axios');
const config = require('../../config.js');

let getAllQuestionsAnswers = (callback, productId) => {
  const id = productId.product_id;
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=${id}&count=100`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  };

  //25168
  //25167

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

let postQuestion = (question, callback) => {
  // callback(null, question);

  let options = {
    method: 'POST',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    },
    data: question,
  };

  axios(options)
    .then((response) => {
      console.log('AXIOS SUCCESS');
      callback(null, JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log('AXIOS FAILURE');
      callback(error);
    })
}

module.exports = {getAllQuestionsAnswers, postQuestion};