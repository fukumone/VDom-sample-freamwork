import React from 'react';
import ReactDOM from 'react-dom';

const ArticleForm = React.createClass({
  render: function() {
    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">Title</label>
            <div className="col-sm-10">
              <input ref="name" className="form-control"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Price</label>
            <div className="col-sm-10">
              <input ref="body" className="form-control"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-primary">更新</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

ReactDOM.render(
  <ArticleForm />,
  document.getElementById('main')
);
