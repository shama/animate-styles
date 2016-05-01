var yo = require('yo-yo')
var csjs = require('csjs')
var animate = require('../index.js')

var style = csjs`
body {
  background-color: #f1f1f1;
  margin: 0;
  padding: 2rem;
  font-family: "Roboto", Verdana, sans-serif;
}
pre {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: left;
}
.app {
  width: 600px;
  margin: 1rem auto;
  text-align: center;
}
.app > div {
  animation-iteration-count: infinite;
}
.app h1 {
  color: #f35626;
  background-image: linear-gradient(92deg,#f35626,#feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: hue 60s infinite linear;
}
`

linkFont()
addStyle(animate)
addStyle(style)
var root = render('bounce')
document.body.appendChild(root)

function render (name) {
  function run (val) {
    yo.update(root, render(val))
  }
  return yo`<div class="${style.app}">
    <div class="${animate[name]}">
      <h1>animate-styles</h1>
    </div>
    ${animationSelect(name, run)}
    <p>Composable CSS Animations Built On <a href="http://daneden.github.io/animate.css/" target="_blank">animate.css</a></p>
    <hr />
    ${codeExamples(name)}
  </div>`
}

function addStyle (css) {
  var el = document.createElement('style')
  el.textContent = csjs.getCss(css)
  document.head.appendChild(el)
}

function codeExamples (name) {
  var pre = []
  pre[0] = yo`<pre></pre>`
  pre[0].textContent = `
var animate = require('animate-styles')
var yo = require('yo-yo')

var el = yo\`<h1 class="\${animate.${name}}">animate-styles</h1>\`
  `
  pre[1] = yo`<pre></pre>`
  pre[1].textContent = `
var animate = require('animate-styles')
var yo = require('yo-yo')
var csjs = require('csjs')

var style = csjs\`
.custom extends \${animate.${name}} {
  animation-iteration-count: infinite;
}
\`

var el = yo\`<h1 class="\${style.custom}">animate-styles</h1>\`
  `
  pre[2] = yo`<pre></pre>`
  pre[2].textContent = `
var style = require('animate-styles/attention_seekers')
var el = yo\`<h1 class="\${style.bounce}">bouncing</h1>\`
  `
  return yo`<div>
    <h3>Usage with yo-yo</h3>
    ${pre[0]}
    <h3>Customize the animation by extending</h3>
    ${pre[1]}
    <h3>Require only certain animations</h3>
    ${pre[2]}
  </div>`
}

function animationSelect (name, onchange) {
  var animations = require('animate.css/animate-config.json')
  var keys = Object.keys(animations)
  return yo`<select onchange=${function (e) {
    onchange(e.target.value)
  }}>
    ${keys.map(function (key) {
      return yo`<optgroup label="${key}">
        ${animations[key].map(function (animation) {
          if (animation === name) {
            return yo`<option value="${animation}" selected="selected">
              ${animation}
            </option>`
          } else {
            return yo`<option value="${animation}">
              ${animation}
            </option>`
          }
        })}
      </optgroup>`
    })}
  </select>`
}

function linkFont () {
  var link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Roboto'
  link.rel = 'stylesheet'
  link.type = 'text/css'
  document.head.appendChild(link)
}
