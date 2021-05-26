const store = require('./store');
const { socket } = require('./../../socket');

const addMessage = (chat, user, message, file) => {
  return new Promise((resolve, reject) => {

    if(!chat || !user || !message){
      console.error('[message controller] no hay usuario o mensaje')
      return reject('incorrect data');
    }

    let fileUrl = '';
    if(file){
      fileUrl = 'http://localhost:3000/app/files/' + file.filename;
    }

    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl,
    };

    store.add(fullMessage);
    socket.io.emit('message', fullMessage);
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