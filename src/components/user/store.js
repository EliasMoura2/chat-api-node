const Model = require('./model');

const addUser = async (user) => {
  const newUser = new Model(user);
  const anUser = await newUser.save();
  return anUser;
};

const getAllUser = async () => {
  const users = await Model.find();
  return users;
}

module.exports = {
  add: addUser,
  getUsers: getAllUser,
  // getUser: getAnUser,
}