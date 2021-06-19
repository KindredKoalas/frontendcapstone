const models = require('../models/questionsandanswers.js');

module.exports = {
  get(req, res) {
    models.getAllQuestionsAnswers(
      (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(data);
        }
      },
      req.params,
    );
  },

  post(req, res) {
    models.postQuestion(req.body, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(JSON.stringify(data));
      }
    });
  },
};
