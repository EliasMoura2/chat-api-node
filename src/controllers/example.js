const router = require('express').Router();

router.get('/', (req, res) => {
  // client headers
  console.log(req.headers);

  // send header to client
  res.header({
    "custom-header": "Value custom"
  })
  res.send('Examples list');
});

router.post('/', (req, res) => {
  // Body
  console.log(req.body);
  const { message, name } = req.body;
  console.log(message, name);

  // Query
  console.log(req.query);
  res.send('Example created');
});