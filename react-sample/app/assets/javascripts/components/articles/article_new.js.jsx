class ArticleNew extends React.Component {
  render() {
    return (
      <div>
        <h1>New Article</h1>
        <ArticleForm action="/articles.json" method="POST" submit="Create" updateFlash={this.props.updateFlash}/>
        <ReactRouter.Link to="index" className="btn btn-default">Back</ReactRouter.Link>
      </div>
    )
  }
}
