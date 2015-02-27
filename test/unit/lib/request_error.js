const expect = require('chai').expect;

const RequestError = require('../../../lib/request_error');

describe('RequestError', function() {
  it('should return an error object when inoked with the new keyword', function() {
    var requestError = new RequestError();
    expect(requestError).to.be.instanceof(Error);
    expect(requestError).to.be.instanceof(RequestError);
  });

  it('should not require the `new` keyword', function() {
    var requestError = RequestError();
    expect(requestError).to.be.instanceof(Error);
    expect(requestError).to.be.instanceof(RequestError);
  });

  it('should default to httpStatus: 400', function() {
    expect(RequestError().httpStatus).to.equal(400);
  });

  it('should set httpStatus to the value of the passed-in argument', function() {
    expect(RequestError(500).httpStatus).to.equal(500);
  });

  it('should default to title: "Bad Request"', function() {
    expect(RequestError().title).to.equal('Bad Request');
  });

  it('should default to message: "Client Error"', function() {
    expect(RequestError().message).to.equal('Client Error');
  });

  it('should set message to the value of the passed-in argument', function() {
    var message = 'My Message';
    expect(RequestError(null, message).message).to.equal(message);
  });

  it('should have a name property set to "RequestError"', function() {
    expect(RequestError().name).to.equal('RequestError');
  });

  it('should have a data property matching the passed-in argument', function() {
    var data = {a:1};
    expect(RequestError(400, '', data).data).to.equal(data);
  });
});
