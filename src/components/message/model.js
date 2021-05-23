const { model, Schema } = require('mongoose');

const messageSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  message: {
    type: String,
    require: true
  },
  date: Date
})

module.exports =  model('Message', messageSchema);

