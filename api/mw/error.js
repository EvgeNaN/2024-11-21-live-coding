const HttpError = require('../../models/errors/http');

module.exports = (err, req, res, next) => {
  if (res.headersSent) {
    return next();
  }

  console.error(err);

  if (err instanceof HttpError) {
    return res.status(err.status || 500).json({
      message: err.message,
    });
  }

  res.status(500).json({
    message: 'Something went wrong',
  });
};
