if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const server = require('./app');

const port = 5000;

server.listen(port, () => console.log(`Server listening on port ${port}!`));