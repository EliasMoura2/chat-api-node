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

const getMessages = () => {
  return new Promise ((resolve, reject) => {
    resolve(store.list())
  });
};

module.exports = {
  addMessage,
  getMessages
}