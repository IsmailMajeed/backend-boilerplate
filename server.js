require('dotenv').config();
const express = require('express');
const cors = require('cors');
const validateUser = require('./App/Middleware/userValidation');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('secretKey', process.env.SECRETKEY);
app.use('/uploads', express.static('uploads'));

require('./Connection/connection');

app.get('/', (req, res) => {
  res.send('Server Running');
})

const productRoute = require('./Routes/Products');
app.use('/Products', validateUser, productRoute);

const userRoute = require('./Routes/userRoute');
app.use('/user', userRoute)

app.listen(PORT, () => {
  console.log(`Your server is running on ${PORT}`);
})