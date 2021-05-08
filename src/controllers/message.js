const router = require('express').Router();

router.get('/', (req, res) => {
  // client headers
  console.log(req.headers);
  res.send('Message list');
});

router.post('/', (req, res) => {
  // Body
  console.log(req.body);
  const { message, name } = req.body;
  console.log(message, name);

  // Query
  console.log(req.query);
  res.send('Message created')
});

module.exports = router;