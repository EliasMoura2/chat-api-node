const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Messages list');
});

router.post('/', (req, res) => {
  res.send('Message created')
});

module.exports = router;