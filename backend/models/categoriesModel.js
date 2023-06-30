const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  productNature: String,
  productDescription: String,
  category: String,
  barcodeValue: String,
  wholesalePrice: Number,
  retailPrice: Number,
  supplier: String,
  physicalStock: Number,
  stockLimit: Number,
  outlet: String,
  measurementUnit: Number,
  unit: String,
  tax: {
    type: Number,
    default: 0
  },
  storageLocation: String,
  brand: String
});

const lunchSchema = new mongoose.Schema({
  categoryName: String,
  shopID: String,
  outletID: String,
  Products: [productSchema]
});

module.exports = mongoose.model('categories', lunchSchema);
