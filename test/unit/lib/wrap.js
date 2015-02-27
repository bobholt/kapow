const expect = require('chai').expect;

const wrap = require('../../../lib/wrap');
const RequestError = require('../../../lib/request_error');

describe('wrap', function() {
  it('should default to a RequestError', function() {
    expect(wrap()).to.be.instanceof(RequestError);
  });

  it('should set error to the passed-in error argument', function() {
    expect(wrap(new TypeError())).to.be.instanceof(TypeError);
  });

  it('should default to httpStatus: 400', function() {
    expect(wrap().httpStatus).to.equal(400);
  });

  it('should set httpStatus to the passed-in argument', function() {
    var code = 500;
    expect(wrap(null, code, null).httpStatus).to.equal(code);
  });

  it('should default to message: "Client Error"', function() {
    expect(wrap().message).to.equal('Client Error');
  });

  it('should set message to the passed-in argument', function() {
    var message = 'My Message';
    expect(wrap(null, null, message).message).to.equal(message);
  });

  it('should default to title: "Bad Request"', function() {
    expect(wrap().title).to.equal('Bad Request');
  });
});
