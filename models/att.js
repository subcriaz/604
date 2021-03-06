const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attSchema = new Schema({
  
  attuserid: {
    type: String,
    required: true
  },
  attdate: {
    type: String,
    required: true
  },
  atttime: {
    type: String,
    required: true
  }
  ,
  atttype: {
    type: String,
    required: true
  },
  attsms: {
    type: String,
    required: true
  },
  attsmssent: {
    type: String,
    required: true
  },
  attcreatedon: {
    type: String,
    required: true
  },
  attcreatedby: {
    type: String,
    required: true
  }
  
});

module.exports = mongoose.model('Att', attSchema);