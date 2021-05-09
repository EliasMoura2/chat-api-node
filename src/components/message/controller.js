
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

    console.log(fullMessage);
    resolve(fullMessage);
  });
};

module.exports = {
  addMessage
}