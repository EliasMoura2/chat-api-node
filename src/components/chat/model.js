const { model, Schema } = require('mongoose');

const chatSchema = new Schema({
  users: [
    {
      type: Schema.ObjectId,
      ref: 'User'
    },
  ]
})

module.exports = model('Chat', chatSchema);