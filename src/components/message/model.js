const { model, Schema } = require('mongoose');

const messageSchema = new Schema({
  chat: {
    type: Schema.ObjectId,
    ref: 'Chat'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  message: {
    type: String,
    require: true
  },
  date: Date,
  file: String,
})

module.exports =  model('Message', messageSchema);

