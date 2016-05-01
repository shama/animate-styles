var fs = require('fs')
var path = require('path')
var animateConfig = require('animate.css/animate-config.json')

var all = []
Object.keys(animateConfig).forEach(function (key) {
  var srcdir = path.join(path.dirname(require.resolve('animate.css')), 'source', key)
  var files = fs.readdirSync(srcdir)
  var css = files.map(function (file) {
    var contents = fs.readFileSync(path.join(srcdir, file)).toString()
    var cls = path.basename(file, '.css')
    var regx = new RegExp('\\.' + cls, 'g')
    contents = contents.replace(regx, '.' + cls + ' extends .animated')
    return contents
  }).join('\n')
  all.push(css)
  createModule(key, css)
})
createModule('index', all.join('\n'))

function createModule (key, css) {
  var destfile = path.join(__dirname, '..', key + '.js')
  var out = `var csjs = require('csjs')
module.exports = csjs\`
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
${css.trim()}
\``
  fs.writeFileSync(destfile, out)
  console.log('Created ' + key)
}
