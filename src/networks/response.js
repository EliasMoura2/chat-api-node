const statusMessages = {
  '200': 'Done',
  '201': 'Created',
  '400': 'Invalid format',
  '500': 'Internal error'
}

exports.success = (req, res, status = 200, message, data) => {
  let statusCode = status;
  let statusMessage = message;

  if(!statusMessage){
    statusMessage = statusMessages[statusCode];
  }

  res.status(status).send({
    error: '',
    body: data,
    message: statusMessage
  });
};

exports.error = (req, res, status = 500, message, details) => {
  let statusCode = status;
  let statusMessage = message;

  if(!statusMessages){
    statusMessage = statusMessages[statusCode];
  }

  console.error(`[response error] - ${details}`);
  res.status(status).send({
    error: statusMessage,
    body: ''
  });
};