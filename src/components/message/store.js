let list = [];

const persist = (message) => {
  list.push(message);
};

const getAll = () => {
  return list;
};

module.exports = {
  add: persist,
  list: getAll,
  // get
  // update
  // delete
}