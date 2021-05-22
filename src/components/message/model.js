const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  user: String,
  message: {
    type: String,
    require: true
  },
  date: Date
})

module.exports =  mongoose.model('Message', messageSchema);

