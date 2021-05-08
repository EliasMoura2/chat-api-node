const router = require('express').Router();

router.get('/', (req, res) => {
  // client headers
  console.log(req.headers);

  // send header to client
  res.header({
    "custom-header": "Value custom"
  })

  // respuesta vacia
  // res.send(); // default status 200
  res.status(200).send({
    error: '',
    body: '',
    message: 'Examples list'
  });
});

router.post('/', (req, res) => {
  // Body
  console.log(req.body);
  const { message, name } = req.body;
  console.log(message, name);

  // Query
  console.log(req.query);
  res.status(201).send({
    error: '',
    body: '',
    message: 'Example created'
  });
});

module.exports = router;