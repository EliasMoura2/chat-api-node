const router = require('express').Router();
const response = require('../../networks/response');
const controller = require('./controller');

router.post('/', async (req, res) => {
  controller.addUser(req.body.firstname)
    .then((data) => response.success(req, res, 201, data))
    .catch(error => response.error(req, res, 500, 'Internal error', error));
})

module.exports = router;