const router = require('express').Router();
const response = require('../networks/response');

router.get('/', (req, res) => {
  // client headers
  console.log(req.headers);

  // send header to client
  res.header({
    "custom-header": "Value custom"
  })
  response.success(req, res, 200, 'Examples list');
});

router.post('/', (req, res) => {
  // Body
  console.log(req.body);
  const { message, name } = req.body;
  console.log(message, name);

  
  if(req.query.error === 'ok'){
    // Query
    console.log(req.query);
    return response.error(req, res, 400, 'Error simulado', 'error.message');
  }

  response.success(req, res, 201, 'Example created');
});

module.exports = router;