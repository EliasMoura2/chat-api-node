const router = require('express').Router();
const response = require('../../networks/response');
const controller = require('./controller');

router.get('/', (req, res) => {
  const filterMessage = req.query.user || null;
    controller.getMessages(filterMessage)
      .then((messageList) => response.success(req, res, 200, messageList))
      .catch(error => response.error(req, res, 500, 'Unexpected error', error.message))
});

router.post('/', async (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
      .then((fullMessage) => response.success(req, res, 201, fullMessage))
      .catch( error => response.error(req, res, 400, 'Informacion inválida', error));

});

router.patch('/:id', (req, res) => {
  controller.updateMessage(req.params.id, req.body.message)
    .then(data => response.success(req, res, 200, data))
    .catch(error => response.error(req, res, 500, 'Error interno', error))
});

module.exports = router;