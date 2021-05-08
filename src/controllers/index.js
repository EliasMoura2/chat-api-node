const router = require('express').Router();

router.get('/', (req, res) => res.send('Hello World!'));
router.post('/', (req, res) => res.send('Post Hello World!'));

module.exports = router;