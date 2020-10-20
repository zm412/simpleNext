
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const schemaAddr = new Schema({
  email: {
    type: String,
    //match: /^.+@.+\..+$/igm,
    require: true
  },
  check:{
    type: String,
    default: 'off'
  } ,
  moreInfo: {
    type: String,
    default: 'off'
  },
  date: {
    type: Date,
    default: Date.now 
  }
}, { versionKey: false });



module.exports = mongoose.model('Address', schemaAddr);
