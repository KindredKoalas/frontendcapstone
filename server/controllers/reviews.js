const models = require('../models/reviews.js');

module.exports = {
  get: function (req, res) {
    models.getAllReviews(
      (err, data) => {
        if (err) {
          res.status(500).send(err)
        } else {
          res.status(200).send(data)
        }
      }
    , req.params);
  },

  getMeta: function (req, res) {
    //console.log('req.params', req.params);
    models.getReviewMetadata(
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
    models.createReview(req.body, (err, data) => {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(JSON.stringify(data));
      }
    })
  }

}