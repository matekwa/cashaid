const mongoose = require('mongoose');

const outletSchema = new mongoose.Schema({
  outletName: String,
  location: String,
  cashier: String,
  manager: String
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
  categories: [String],
  outlets: [outletSchema],
  suppliers: [supplierSchema]
});

module.exports = mongoose.model('shops', shopSchema);
