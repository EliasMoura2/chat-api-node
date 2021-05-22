const store = require('./store');

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {

    if(!user || !message){
      console.error('[message controller] no hay usuario o mensaje')
      return reject('incorrect data');
    }

    const fullMessage = {
      user,
      message,
      date: new Date()
    };

    store.add(fullMessage);
    resolve(fullMessage);
  });
};

const getMessages = (filterUser) => {
  return new Promise ((resolve, reject) => {
    resolve(store.list(filterUser))
  });
};

const updateMessage = (id, message) => {
  return new Promise ( async (resolve, reject) => {
    if(!id || !message) {
      reject('Invalid data');
      return false;
    }
    const result = await store.update(id, message);
    resolve(result);
  });
};

const deleteMessage = (id) => {
  return new Promise ((resolve, reject) => {
    if(!id){
      reject('Id invalido');
      return false;
    }
    store.delete(id)
      .then(() => resolve())
      .catch(error => reject(error))
      
  });
};

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
}