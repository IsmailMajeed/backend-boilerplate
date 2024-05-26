const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODBURL).then(res => {
  console.log("Connection Successfully");
}).catch(err => {
  console.log("ERROR: ", err);
})