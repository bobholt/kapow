/**
  Modified version of Ember.js camelize
  https://github.com/emberjs/ember.js/blob/v1.10.0/packages/ember-runtime/lib/system/string.js#L19-L25
  Ember.js Copyright (c) 2015 Yehuda Katz, Tom Dale and Ember.js contributors
  (MIT License)
*/

module.exports = function(str) {
  return str.replace(/('|")/g, '')
  .replace(/(\-|_|\.|\s)+(.)?/g, function(match, separator, chr) {
    return chr ? chr.toUpperCase() : '';
  }).replace(/^([A-Z])/, function(match) {
    return match.toLowerCase();
  });
};
