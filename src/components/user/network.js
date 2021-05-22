const router = require('express').Router();
const response = require('../../networks/response');
const controller = require('./controller');

router.get('/', (req, res) => {
  controller.getUsers()
    .then((data) => response.success(req, res, 200, data))
    .catch(error => response.error(req, res, 500, 'Internal error', error))
});

router.post('/', async (req, res) => {
  controller.addUser(req.body.firstname)
    .then((data) => response.success(req, res, 201, data))
    .catch(error => response.error(req, res, 500, 'Internal error', error));
})

module.exports = router;