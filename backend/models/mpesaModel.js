const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  business_id: {
    type: String,
    required: true
  },
  TransID: {
    type: String,
    required: true
  },
  TransTime: {
    type: Date,
    required: true
  },
  TransAmount: {
    type: Number,
    required: true
  },
  BillRefNumber: {
    type: String,
    required: true
  },
  MSISDN: {
    type: String,
    required: true
  },
  customer_name: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    middleName: {
      type: String
    }
  },
  status: {
    type: String,
    required: true
  }
});

module.exports  = mongoose.model('mpesa', transactionSchema);