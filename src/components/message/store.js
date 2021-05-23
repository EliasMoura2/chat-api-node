const Model = require('./model');


// let list = [];

const addMessage = async (message) => {
  // list.push(message);
  const newMessage = new Model(message);
  const aMessage = await newMessage.save();
  return aMessage;
};

const getAll = async (filterUser) => {
  return new Promise ((resolve, reject) => {
    let filter = {} 
    if(filterUser !== null){
      filter = { user: filterUser };
    }
    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if(error){
          reject(error)
          return false;
        }
        resolve(populated);
      })
  })
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
  add: addMessage,
  list: getAll,
  update: update,
  delete: destroy
}