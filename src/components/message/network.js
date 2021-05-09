const router = require('express').Router();
const response = require('../../networks/response');

router.get('/messages', (req, res) => {
  try {
    
    response.success(req, res, 200, 'Messages list');
  } catch (error) {
    response.error(req, res, 400, 'Error', error.message);
  }
});

router.post('/messages', (req, res) => {
  try {
    if (req.query.error === 'ok') {
      throw new Error('Error simulado!');
    }
    response.success(req, res, 201, 'Message created');
  } catch (error) {
    response.error(req, res, 400, 'Error', error.message);
  }
});

module.exports = router;