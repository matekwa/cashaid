const mongoose = require('mongoose');

// Define the schema for the name object
const nameSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  middleName: { type: String }
});

// Define the schema for the credit card transactions
const creditCardSchema = new mongoose.Schema({
  TransID: { type: String},
  TransTime: { type: Date, default: Date().now},
  TransAmount: { type: String},
  BillRefNumber: { type: String},
  name: { type: nameSchema},
  status: { type: String}
});

// Define the schema for the mpesa transactions
const mpesaSchema = new mongoose.Schema({
  TransID: { type: String, required: true },
  TransTime: { type: Date, required: true,  default: Date().now },
  TransAmount: { type: String, required: true },
  BillRefNumber: { type: String, required: true },
  MSISDN: { type: String, required: true },
  name: { type: nameSchema, required: true },
  status: { type: String, required: true }
});

// Define the schema for the cash transactions
const cashSchema = new mongoose.Schema({
  TransTime: { type: Date, required: true,  default: Date().now },
  TransAmount: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  name: { type: nameSchema, required: true }
});

// Define the main schema for the user transactions
const transactionSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  transactions: {
    method: {
        creditCard: { type: [creditCardSchema] },
        mpesa: { type: [mpesaSchema] },
        cash: { type: [cashSchema] }
    }
  }
});

// Create the model using the schema
module.exports = mongoose.model('transactions', transactionSchema);
