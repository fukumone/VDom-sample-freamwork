var React = require('react')
var ReactDOM = require('react-dom')

console.log(React)
console.log(ReactDOM)

var CommentBox = React.createClass({
  render: function() {
    return (
      <div>
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('main')
);
