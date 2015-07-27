"use strict";

var tape = require('tape');
var getCssSelector = require('../');

tape('get css selector', function(t) {

  t.equal(getCssSelector('foo'), '.foo', 'single classname');

  t.equal(getCssSelector('foo bar'), '.foo.bar', 'multiple classnames');

  t.equal(getCssSelector('foo bar', 'baz'), '.foo.bar .baz', 'multiple classnames');

  t.equal(getCssSelector('foo bar', 'baz moo'), '.foo.bar .baz.moo', 'set of rules');

  t.end();

});
