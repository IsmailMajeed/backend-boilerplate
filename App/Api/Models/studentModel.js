const mongoose = require('mongoose');
mongoose.pluralize(null);

const Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: String,
  rollNo: { type: Number, unique: true, required: true },
  address: [{ type: String }]
});

const StudentModel = mongoose.model('Student', StudentSchema);
module.export = StudentModel;