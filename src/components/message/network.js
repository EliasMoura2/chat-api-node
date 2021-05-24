const router = require('express').Router();
const multer = require('multer');
const response = require('../../networks/response');
const controller = require('./controller');

const upload = multer({
  dest: 'public/files'
})

router.get('/', (req, res) => {
  const filterMessage = req.query.user || null;
    controller.getMessages(filterMessage)
      .then((messageList) => response.success(req, res, 200, messageList))
      .catch(error => response.error(req, res, 500, 'Unexpected error', error.message))
});

router.post('/', upload.single('file'), async (req, res) => {
    // console.log(req.file);
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
      .then((fullMessage) => response.success(req, res, 201, fullMessage))
      .catch( error => response.error(req, res, 400, 'Informacion inválida', error));

});

router.patch('/:id', (req, res) => {
  controller.updateMessage(req.params.id, req.body.message)
    .then(data => response.success(req, res, 200, data))
    .catch(error => response.error(req, res, 500, 'Error interno', error))
});

router.delete('/:id', (req, res) => {
  controller.deleteMessage(req.params.id)
    .then(() => { 
      response.success(req, res, 200, `Message ${req.params.id} eliminado`)
    })
    .catch( error => response.error(req, res, 500, `Error interno`, error))
});

module.exports = router;