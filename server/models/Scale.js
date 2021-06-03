const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const ScaleSchema = new mongoose.Schema({
  id: {
    type: ObjectId,
    require: true,
  }, 
  name: { 
    type: String, 
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Scale = mongoose.model('Scale', ScaleSchema);

module.exports = { Scale };
