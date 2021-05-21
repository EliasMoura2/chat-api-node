exports.success = (req, res, status, message) => {
  res.status(status).send({
    error: '',
    body: message,
  });
};

exports.error = (req, res, status, message = '', details = '') => {
  console.log(`[response error] - ${details}`);
  res.status(status).send({
    error: message,
    body: ''
  });
};