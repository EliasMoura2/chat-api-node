const db = require('mongoose');
const Model = require('./model')

// db.Promise = global.Promise
db.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then((db) => console.log("DB is CONNECTED"))
  .catch((err) => console.error(err));
console.log('[db] Connected')
// let list = [];

const persist = async (message) => {
  // list.push(message);
  const newMessage = new Model(message);
  const aMessage = await newMessage.save();
  // return aMessage;
};

const getAll = async () => {
  const messages = await Model.find();
  return messages;
};

const update = async (id, message) => {
  // const message = Model.findById(id);
  const foundMessage = await Model.findOne({_id: id});

  foundMessage.message = message;
  const messageUpdated = await foundMessage.save();
  return messageUpdated;
};

module.exports = {
  add: persist,
  list: getAll,
  update: update,
  // delete
}