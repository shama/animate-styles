# animate-styles

Composable CSS Animations Built On [animate.css](http://daneden.github.io/animate.css/)

### install

```
npm install animate-styles --save
```

### usage

```js
var animate = require('animate-styles')
var yo = require('yo-yo')
var el = yo`<h1 class="${animate.fadeIn}">hello</h1>`
document.body.appendChild(el)
```

### extract the style

The stylesheet will need to be added to the document to view. Here is a way using
[csjs](https://github.com/rtsao/csjs):

```js
var animate = require('animate-styles')
var csjs = require('csjs')

var style = document.createElement('style')
style.textContent = csjs.getCss(animate)
document.head.appendChild(style)
```

Or check out (csjs-extractify)[https://github.com/rtsao/csjs-extractify] for
extracting the CSS to files or [csjs-injectify](https://github.com/rtsao/csjs-injectify)
for injecting the CSS into the document.
