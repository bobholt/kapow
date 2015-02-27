const errorCodes = require('./error_codes');

function RequestError(code, message, data) {
  if (!(this instanceof RequestError)) {
    return new RequestError(code, message, data);
  }
  this.httpStatus = code || 400;
  this.title = errorCodes[this.httpStatus];
  this.message = message || 'Client Error';
  this.name = 'RequestError';
  this.data = data;
}

RequestError.prototype = new Error();

module.exports = RequestError;
