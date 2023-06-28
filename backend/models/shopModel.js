const mongoose = require('mongoose');

const outletSchema = new mongoose.Schema({
  outletName: String,
  location: String,
  cashier: {
    type: String,
    default: ''
  },
  manager: {
    type: String,
    default: ''
  }
});

const supplierSchema = new mongoose.Schema({
  businessName: String,
  firstName: String,
  secondName: String,
  email: String,
  phoneNumber: String,
  address: String,
  town: String
});

const shopSchema = new mongoose.Schema({
  name: String,
  ownerID: String,
  brands: [String],
  categories: [String],
  outlets: [outletSchema],
  suppliers: [supplierSchema]
});

module.exports = mongoose.model('shops', shopSchema);

