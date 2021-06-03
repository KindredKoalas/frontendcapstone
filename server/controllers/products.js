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
  }
}