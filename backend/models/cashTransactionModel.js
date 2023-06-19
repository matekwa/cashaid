const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    business_id: {
    type: String,
    required: true
  },
  transaction_type: {
    type: String,
    required: true,
    default: "Cash"
  },
  TransTime: {
    type: Date,
    required: true,
    default: Date().now
  },
  TransAmount: {
    type: Number,
    required: true
  },
  MSISDN: {
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
  status: {
    type: String,
    required: true,
    default: "completed"
  }
});

module.exports = mongoose.model('cash', transactionSchema);
