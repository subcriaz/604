const mongoose = require('mongoose');
							

const Schema = mongoose.Schema;

const transSchema = new Schema({
  
  trans_userid	: {
    type: String,
    required: true
  }
  ,trans_date: {
    type: String,
    required: true
  }
  ,trans_time: {
    type: String,
    required: true
  }
  ,trans_type: {
    type: String,
    required: true
  }
  ,trans_amount: {
    type: String,
    required: true
  }
  
  ,trans_sms: {
    type: String,
    required: true
  }
  ,trans_sms_sent: {
    type: String,
    required: true
  }
  ,trans_createdon: {
    type: String,
    required: true
  }
  ,trans_createdby: {
    type: String,
    required: true
  }
  
});

module.exports = mongoose.model('Trans', transSchema);