import React from 'react'
import ReactDOM from 'react-dom'

let data = [
  {title: "hoge", body: "This is one comment"},
  {title: "hoge", body: "This is *another* comment"}
]

const ArticleForm = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Gin React Sample</h1>
        <form className="form-horizontal" action="/article" method="post">
          <div className="form-group">
            <label className="col-sm-2 control-label">Name</label>
            <div className="col-sm-10">
              <input ref="name" className="form-control"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Title</label>
            <div className="col-sm-10">
              <input ref="title" className="form-control"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Body</label>
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
    )
  }
})

// const ArticleList = React.createClass({
//   render: function() {
//     return (

//     )
//   }
// })

// const Article = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h2>
//           {this.props.title}
//         </h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });


// const ArticleBox = React.createClass({
//   render: function() {
//     return (

//     )
//   }
// })

ReactDOM.render(
  <ArticleForm />,
  document.getElementById('main')
)
