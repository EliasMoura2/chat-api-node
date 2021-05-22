const Model = require('./model')


// let list = [];

const persist = async (message) => {
  // list.push(message);
  const newMessage = new Model(message);
  const aMessage = await newMessage.save();
  // return aMessage;
};

const getAll = async (filterUser) => {
  let filter = {} 
  if(filterUser !== null){
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
};

const update = async (id, message) => {
  // const message = Model.findById(id);
  const foundMessage = await Model.findOne({_id: id});

  foundMessage.message = message;
  const messageUpdated = await foundMessage.save();
  return messageUpdated;
};

const destroy = (id) => {
  return Model.deleteOne({
    _id: id
  })
};

module.exports = {
  add: persist,
  list: getAll,
  update: update,
  delete: destroy
}