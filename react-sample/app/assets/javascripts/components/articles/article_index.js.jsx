class ArticleIndex extends React.Component {
    constructor() {
        super()
        this.state = {
            articles: []
        }
    }
    reloadArticles(query) {
        $.ajax({
            url: '/articles.json',
            data: query || this.props.query,
            success: (result) => {
                this.setState({
                    articles: result.articles
                })
            }
        })
    }
    componentWillReceiveProps(nextProps) {
        this.reloadArticles(nextProps.query)
    }
    componentDidMount() {
        this.reloadArticles()
    }
    render() {
        return (
            <div>
                <h1>Listing Articles</h1>
                <ArticleIndexTable articles={this.state.articles} updateFlash={this.props.updateFlash} reloadArticles={this.reloadArticles.bind(this)}/>
                <br/>
                <ReactRouter.Link to="new" className="btn btn-default">New</ReactRouter.Link>
            </div>
        )
    }
}

class ArticleIndexTable extends React.Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Body</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th colSpan="3"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.articles.map((article, i) => <ArticleIndexTableRow key={i} article={article} updateFlash={this.props.updateFlash} reloadArticles={this.props.reloadArticles}/>)}
                </tbody>
            </table>
        )
    }
}

class ArticleIndexTableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.article.id}</td>
                <td>{this.props.article.name}</td>
                <td>{this.props.article.body}</td>
                <td>{this.props.article.created_at}</td>
                <td>{this.props.article.updated_at}</td>
                <td><ReactRouter.Link to="show" params={{ id: this.props.article.id }}>Show</ReactRouter.Link></td>
                <td><ReactRouter.Link to="edit" params={{ id: this.props.article.id }}>Edit</ReactRouter.Link></td>
            </tr>
        )
    }
}
