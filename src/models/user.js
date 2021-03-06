
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.models = {};
mongoose.modelSchemas = {};

const schemaUser = new Schema({
  login: {
    type: String,
    require: true,
  },
  password:{
    type: String,
    require: true
 },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  }
}, 
  { timestamps: true, });

schemaUser.set('toJSON', { virtuals: true });


module.exports = mongoose.model('User', schemaUser);
