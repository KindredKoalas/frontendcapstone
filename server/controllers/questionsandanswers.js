const models = require('../models/questionsandanswers.js');

module.exports = {
  get: function (req, res) {
    console.log('req.params', req.params);
    models.getAllQuestionsAnswers(
      (err, data) => {
        if (err) {
          res.status(500).send(err)
        } else {
          res.status(200).send(data)
        }
      }
    , req.params);
  }
}