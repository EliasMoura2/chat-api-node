if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const app = require('./app');

const port = 5000;

app.listen(port, () => console.log(`Server listening on port ${port}!`));