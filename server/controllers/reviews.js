const models = require('../models/reviews.js');

module.exports = {
  get: function (req, res) {
    console.log('req.params', req.params);
    console.log('req.body', req.body);
    models.getAllReviews(
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