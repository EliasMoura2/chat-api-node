const router = require('express').Router();
const response = require('../../networks/response');
const controller = require('./controller');

router.get('/', (req, res) => {
    controller.getMessages()
      .then((messageList) => response.success(req, res, 200, messageList))
      .catch(error => response.error(req, res, 500, 'Unexpected error', error.message))
});

router.post('/', async (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
      .then((fullMessage) => response.success(req, res, 201, fullMessage))
      .catch( error => response.error(req, res, 400, 'Informacion inválida', error));

});

module.exports = router;