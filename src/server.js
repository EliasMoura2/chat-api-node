if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const server = require('./app');
const { port, host } = require('./config/config');

server.listen(port, () => console.log(`Server listening on ${host}:${port}`));