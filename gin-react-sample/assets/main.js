import React from 'react';
import ReactDOM from 'react-dom';

const CommentBox = React.createClass({
  render: function() {
    return (
      <div>
        Hello, GinReactSample!.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('main')
);
