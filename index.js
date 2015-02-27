const errorCodes = require('./lib/error_codes');
const partial = require('./lib/partial');
const camelize = require('./lib/camelize');
const RequestError = require('./lib/request_error');
const wrap = require('./lib/wrap');

function Kapow(code, message, data) {
  if (!(this instanceof Kapow)) {
    return new Kapow(code, message, data);
  }
  code = code || 400;
  return this[code](message, data);
}

// Attach Error handlers for each status code and status title
Object.keys(errorCodes).forEach(function(key) {
  Kapow.prototype[key] =
  Kapow.prototype[camelize(errorCodes[key])] = partial(RequestError, key);
});

// Static methods
Kapow.wrap = wrap;

module.exports = Kapow;
