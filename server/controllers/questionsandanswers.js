const models = require('../models/questionsandanswers.js');

module.exports = {
  get: function (req, res) {
    //console.log('req.params', req.params);
    // console.log('req.body', req.body);
    models.getAllQuestionsAnswers(
      (err, data) => {
        if (err) {
          res.status(500).send(err)
        } else {
          res.status(200).send(data)
        }
      }
    , req.params);
  },

  post: function (req, res) {
    models.postQuestion(req.body, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(JSON.stringify(data));
      }
    })
  }
}