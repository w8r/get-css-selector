# get-css-selector

Converts classnames to css selectors

```js
var getCssSelector = require('classname-to-css-selector');

var className1 = "container outer";
var className2 = "block inner decorated";

var el = document.createElement('div');
el.className = className1;

var inner = document.createElement('span');
inner.className = className2;

el.appendChild(inner);
document.body.appendChild(el);

document.querySelector(getCssSelector(className1, className2)) === inner; // true

```

## Install

```shell
npm install classname-to-css-selector
```

## Test

```shell
npm install && npm test
```
