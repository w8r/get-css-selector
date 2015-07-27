"use strict";

/**
 * "foo bar baz", "bar foo moo" -> ".foo.bar.baz .bar.foo.moo"
 * @param  {String...} classString
 * @return {String}
 */
module.exports = function classNameToSelector(classString) {
  var selector = [];
  for (var i = 0, len = arguments.length; i < len; i++) {
    selector.push(_classNameToSelector(arguments[i]));
  }
  return selector.join(' ');
};

/**
 * "foo bar baz" -> ".foo.bar.baz"
 * @param  {String} classString
 * @return {String}
 */
function _classNameToSelector(classString) {
  return (' ' + classString).split(' ').join('.').trim();
};
