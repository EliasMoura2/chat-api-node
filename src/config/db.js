
const db = require('mongoose');

db.Promise = global.Promise

function connect(url) {
  db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
    .then((db) => console.log("DB is CONNECTED"))
    .catch((err) => console.error(err));
  // console.log('[db] Connected')
}

module.exports = connect;