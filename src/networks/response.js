exports.success = (req, res, status, message, body = '') => {
  res.status(status).send({
    message,
    body,
  });
};

exports.error = (req, res, status, message = '', error = '', body = '') => {
  res.status(status).send({
    error: message,
    body,
  });
};