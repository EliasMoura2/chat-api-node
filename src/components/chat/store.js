const Model = require('./model');

const addChat = (chat) => {
  const aChat = new Model(chat);
  return aChat.save();
};

const listChats = (userId) => {
  return new Promise ((resolve, reject) => {
    let filter = {};
    if(userId){
      filter = {
        user: userId,
      }
    }

    Model.find(filter)
      .populate('users')
      .exec((error, populated) => {
        if(error){
          reject(error);
          return false;
        }
        resolve(populated);
      })
  })
};

module.exports = {
  add: addChat,
  list: listChats,
}