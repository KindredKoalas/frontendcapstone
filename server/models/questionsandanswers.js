const axios = require('axios');
const config = require('../../config.js');

const getAllQuestionsAnswers = (callback, productId) => {
  const id = productId.product_id;
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=${id}&count=100`,
    headers: {
      'User-Agent': 'request',
      Authorization: config.TOKEN,
    },
  };

  // 25168
  // 25167

  // `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=${id}`

  axios.get(options.url, options)
    .then((response) => {
    // handle success
      callback(null, response.data);
    })
    .catch((error) => {
      callback(error);
    });
};

const postQuestion = (question, callback) => {
  // callback(null, question);

  const options = {
    method: 'POST',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/',
    headers: {
      'User-Agent': 'request',
      Authorization: config.TOKEN,
    },
    data: question,
  };

  axios(options)
    .then((response) => {
      callback(null, JSON.stringify(response.data));
    })
    .catch((error) => {
      callback(error);
    });
};

module.exports = { getAllQuestionsAnswers, postQuestion };
