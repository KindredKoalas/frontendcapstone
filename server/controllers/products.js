const models = require('../models/products.js');

module.exports = {
  get: function (req, res) {
    models.getAllProducts(
      (err, data) => {
        if (err) {
          res.status(500).send(err)
        } else {
          res.status(200).send(data)
        }
      }
    );
  },
  getStyles: function (req, res) {
    console.log('req.params', req.params);
    models.getStylesPerProduct(
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