const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  TransTime: {
    type: Date,
    required: true,
    default: Date().now
  },
  TransAmount: {
    type: Number,
    required: true
  },
  PhoneNumber: {
    type: String,
    required: true
  },
  name: {
    firstName: {
      type: String,
      required: true
    },
    middleName: {
      type: String
    },
    lastName: {
      type: String,
      required: true
    }
  },
  business_id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('cash', transactionSchema);
