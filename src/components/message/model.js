const { model, Schema } = require('mongoose');

const messageSchema = new Schema({
  user: String,
  message: {
    type: String,
    require: true
  },
  date: Date
})

module.exports =  model('Message', messageSchema);

