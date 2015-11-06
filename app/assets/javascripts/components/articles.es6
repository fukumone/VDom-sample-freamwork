const React = require('react')
const ReactDom = require('react-dom')
var h1Tag = React.createElement('h1', null, 'Hoge')

ReactDom.render(
  h1Tag,
  document.getElementById('content')
)
