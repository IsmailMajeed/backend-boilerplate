const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./Connection/connection');

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Server Running using nodemon');
})

app.listen(PORT, () => {
  console.log(`Your server is running on ${PORT}`);
})