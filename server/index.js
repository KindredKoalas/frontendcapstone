const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.json());
const axios = require('axios');

app.use(express.static('client/dist'));
// const products = require('./controllers/products.js'); // make sure the spelling is correct!!

//const db = require('../db');



//app.get('/api/products', products.get);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})