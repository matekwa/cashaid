const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  refNo: String,
  productLabel: String,
  serialNo: String,
  barcodeType: String,
  barcodeValue: String,
  productDescription: String,
  wholesalePrice: Number,
  retailPrice: Number,
  tax: Number,
  productImage: String,
  outletID: String,
  supplier: String,
  physicalStock: Number,
  stockLimit: Number
});

const lunchSchema = new mongoose.Schema({
  categoryName: String,
  shopID: String,
  outletID: String,
  Products: [productSchema]
});

module.exports = mongoose.model('categories', lunchSchema);
