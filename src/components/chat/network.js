const router = require('express').Router();
const response = require('../../networks/response');
const controller = require('./controller');

router.get('/:userId', (req, res) => {
  controller.listChats(req.params.userId)
    .then(users => response.success(req, res, 200, users))
    .catch(error => response.error(req, res, 500, 'Internal error', error))
});

router.post('/', (req, res) => {
  controller.addChat(req.body.users)
    .then(data => response.success(req, res, 201, data))
    .catch(error => response.error(req, res, 500, 'Internal error', error))
});

module.exports = router;