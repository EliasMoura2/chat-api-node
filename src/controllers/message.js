const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Message list');
});

router.post('/', (req, res) => {
  // Body
  console.log(req.body);
  const { message, name } = req.body;
  console.log(message, name);

  res.send('Message created')
});

module.exports = router;