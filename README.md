# Kapow!

An http error library


[![Build Status](https://secure.travis-ci.org/bobholt/kapow.png)](http://travis-ci.org/bobholt/kapow)

Kapow! consolidates boilerplate HTTP information into a single easy-to-use
library. You tell Kapow! that you want an error with a particular httpStatus
code, and it fills in the basics for you. It defines and returns a
`RequestError` object based on JavaScript's native `Error` object.

## Installation

`npm install kapow`

## Usage

### Basics:

To get an JavaScript Error object suitable for throwing or passing along, give
Kapow! a status code, a message, and arbitrary data you want to include:

```js
const Kapow = require('kapow');

var code = 404;
var message = 'Ain\'t nobody here here but us chickens.';
var data = {a: 1};
var err = Kapow(code, message, data);

err;
// Returns:
//  { [RequestError: Ain't nobody here but us chickens.]
//    httpStatus: '404',
//    title: 'Not Found',
//    message: 'Ain\'t nobody here but us chickens.',
//    name: 'RequestError',
//    data: { a: 1 } }
```

All arguments to Kapow! are optional. Kapow! will try to figure out sensible
defaults based on the information you did pass in.

This error can be either thrown immediately or passed on through your
application to eventually send the user an informative HTTP response.

### Wrapping an Existing Error:

If your app hands you an error, and you just want to decorate it, you can
use the static `wrap` method on Kapow!:

```js
const Kapow = require('kapow');

somePromise.then().catch(function(err) {
  Kapow.wrap(err, 404, 'Ain\'t nobody here at all.');
});
```

### Changing Your Error:

Once you get the RequestError object back, you can augment it however you like:

```js
const Kapow = require('kapow');

var err = Kapow(403, 'Don\'t you come back no more');

err.title = 'Hit the Road Jack';

err;

// Returns:
//  { [RequestError: Don't you come back no more]
//    httpStatus: '403',
//    title: 'Hit the Road Jack',
//    message: 'Don\'t you come back no more',
//    name: 'RequestError',
//    data: undefined }
```

### Don't Like Numbers?

You can call Kapow with the camelized version of the IETF's official error.
See [Kapow!'s complete error code list](https://github.com/bobholt/kapow/blob/master/lib/error_codes.js) for all supported codes:

```js
const Kapow = require('kapow');

var err = Kapow('forbidden', 'Fie! Forsooth Begone!');

err;

// Returns:
//  { [RequestError: Fie! Forsooth Begone]
//    httpStatus: '403',
//    title: 'Forbidden',
//    message: 'Fie! Forsooth Begone',
//    name: 'RequestError',
//    data: undefined }
```
