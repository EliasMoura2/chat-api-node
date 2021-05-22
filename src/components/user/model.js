const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  firstname: String,
})

module.exports = model('User', userSchema);

