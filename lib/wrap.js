const errorCodes = require('./error_codes');
const RequestError = require('./request_error');

module.exports = function(error, code, message) {
  error = error || new RequestError();
  error.httpStatus = code || 400;
  error.message = message || error.message;
  error.title = errorCodes[error.httpStatus];
  return error;
};
