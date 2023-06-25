const mongoose = require('mongoose');

// Define the schema for the user
const employeesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  shopID: {
    type: String,
    required: true
  },
  outletID: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
});

// Create the User model
module.exports = mongoose.model('employees', employeesSchema);
