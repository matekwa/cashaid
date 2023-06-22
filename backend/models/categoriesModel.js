const mongoose = require('mongoose');

const catgorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  ownerID: {
    type: String,
    required: true
  }
});

module.exports  = mongoose.model('categories', catgorySchema);